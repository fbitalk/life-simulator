"""
Event Manager - Flask Application
A web-based tool for managing Life Simulator events.
"""
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import json
from utils import (
    get_all_event_files,
    load_event_file,
    save_event_file,
    get_default_event,
    get_default_option,
    FILE_DISPLAY_NAMES,
    load_achievements,
    save_achievements,
    get_default_achievement
)

app = Flask(__name__)
app.secret_key = 'life-simulator-event-manager-secret-key'

# Custom Jinja2 Filter to prevent Unicode escaping in JSON
@app.template_filter('json_dumps')
def json_dumps_filter(data):
    if data is None:
        return ""
    return json.dumps(data, ensure_ascii=False)

# Cache for loaded event data
event_cache = {}


def get_cached_data(filename):
    """Get event data from cache or load from file."""
    if filename not in event_cache:
        data, var_name, header = load_event_file(filename)
        event_cache[filename] = {
            'data': data,
            'var_name': var_name,
            'header': header
        }
    return event_cache[filename]


def save_cached_data(filename):
    """Save cached data to file."""
    if filename in event_cache:
        cache = event_cache[filename]
        return save_event_file(filename, cache['data'], cache['var_name'], cache['header'])
    return False


def clear_cache(filename=None):
    """Clear cache for a specific file or all files."""
    if filename:
        event_cache.pop(filename, None)
    else:
        event_cache.clear()


@app.route('/')
def index():
    """Home page - list all event categories."""
    files = get_all_event_files()
    return render_template('index.html', files=files)


@app.route('/category/<filename>')
def category(filename):
    """Category page - list all tags in a file."""
    cache = get_cached_data(filename)
    data = cache['data']
    
    tags = []
    for tag_name, tag_data in data.items():
        event_count = len(tag_data.get('events', {})) if isinstance(tag_data, dict) else 0
        tags.append({
            'name': tag_name,
            'event_count': event_count,
            'is_color': tag_data.get('is_red') or tag_data.get('is_black') or tag_data.get('is_purple') or tag_data.get('is_pink') or tag_data.get('is_golden') if isinstance(tag_data, dict) else False
        })
    
    display_name = FILE_DISPLAY_NAMES.get(filename, filename)
    return render_template('category.html', 
                         filename=filename, 
                         display_name=display_name,
                         tags=tags)


@app.route('/category/<filename>/add_tag', methods=['POST'])
def add_tag(filename):
    """Add a new tag to a category."""
    tag_name = request.form.get('tag_name', '').strip()
    if not tag_name:
        flash('标签名不能为空', 'error')
        return redirect(url_for('category', filename=filename))
    
    cache = get_cached_data(filename)
    if tag_name in cache['data']:
        flash(f'标签 "{tag_name}" 已存在', 'error')
        return redirect(url_for('category', filename=filename))
    
    # Create new tag with events
    new_tag = {'events': {}}
    
    # Description
    description = request.form.get('description', '').strip()
    if description:
        new_tag['description'] = description

    # Auto-add is_color attribute based on filename
    color_map = {
        'redEvents.js': 'is_red',
        'blackEvents.js': 'is_black',
        'purpleEvents.js': 'is_purple',
        'pinkEvents.js': 'is_pink',
        'goldEvents.js': 'is_golden'
    }
    
    if filename in color_map:
        new_tag[color_map[filename]] = True

    # Handle fixed attributes for Purple and Pink
    if filename in ['purpleEvents.js', 'pinkEvents.js']:
        fixed_attrs = {}
        for attr in ['health', 'money', 'social', 'intelligence', 'luck', 'san', 'mystery']:
            val = request.form.get(f'fixed_{attr}', '').strip()
            if val:
                fixed_attrs[attr] = int(val)
        if fixed_attrs:
            new_tag['fixed_attributes'] = fixed_attrs
    
    cache['data'][tag_name] = new_tag
    if save_cached_data(filename):
        flash(f'标签 "{tag_name}" 添加成功', 'success')
    else:
        flash('保存失败', 'error')
    
    return redirect(url_for('category', filename=filename))


@app.route('/category/<filename>/delete_tag/<tag_name>', methods=['POST'])
def delete_tag(filename, tag_name):
    """Delete a tag from a category."""
    cache = get_cached_data(filename)
    if tag_name in cache['data']:
        del cache['data'][tag_name]
        if save_cached_data(filename):
            flash(f'标签 "{tag_name}" 已删除', 'success')
        else:
            flash('保存失败', 'error')
    else:
        flash(f'标签 "{tag_name}" 不存在', 'error')
    
    return redirect(url_for('category', filename=filename))


@app.route('/tag/<filename>/<tag_name>', methods=['GET', 'POST'])
def tag_events(filename, tag_name):
    """Tag page - list all events under a tag and edit tag metadata."""
    cache = get_cached_data(filename)
    if tag_name not in cache['data']:
        flash('标签不存在', 'error')
        return redirect(url_for('category', filename=filename))
        
    tag_data = cache['data'][tag_name]
    
    if request.method == 'POST':
        # Update tag metadata
        tag_data['description'] = request.form.get('description', '').strip()
        
        # Fixed attributes for Purple and Pink
        if filename in ['purpleEvents.js', 'pinkEvents.js']:
            fixed_attrs = {}
            for attr in ['health', 'money', 'social', 'intelligence', 'luck', 'san', 'mystery']:
                val = request.form.get(f'fixed_{attr}', '').strip()
                if val:
                    fixed_attrs[attr] = int(val)
            if fixed_attrs:
                tag_data['fixed_attributes'] = fixed_attrs
            elif 'fixed_attributes' in tag_data:
                del tag_data['fixed_attributes']
                
        if save_cached_data(filename):
            flash('标签修改成功', 'success')
        else:
            flash('保存失败', 'error')
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))

    events_data = tag_data.get('events', {}) if isinstance(tag_data, dict) else {}
    
    events = []
    for event_id, event_data in events_data.items():
        trigger_conditions = event_data.get('trigger_conditions', {})
        age_range = trigger_conditions.get('age_range', [0, 100])
        
        events.append({
            'id': event_id,
            'title': event_data.get('title', '无标题'),
            'description': event_data.get('description', '')[:50] + '...' if len(event_data.get('description', '')) > 50 else event_data.get('description', ''),
            'priority': event_data.get('priority', 0),
            'is_continue': event_data.get('is_continue', False),
            'allow_repeat': event_data.get('allow_repeat', False),
            'age_range': age_range
        })
    
    display_name = FILE_DISPLAY_NAMES.get(filename, filename)
    return render_template('tag.html',
                         filename=filename,
                         display_name=display_name,
                         tag_name=tag_name,
                         tag_data=tag_data,
                         events=events)


@app.route('/tag/<filename>/<tag_name>/add_event', methods=['POST'])
def add_event(filename, tag_name):
    """Add a new event to a tag."""
    event_id = request.form.get('event_id', '').strip()
    if not event_id:
        flash('事件ID不能为空', 'error')
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))
    
    cache = get_cached_data(filename)
    if tag_name not in cache['data']:
        cache['data'][tag_name] = {'events': {}}
    
    if 'events' not in cache['data'][tag_name]:
        cache['data'][tag_name]['events'] = {}
    
    if event_id in cache['data'][tag_name]['events']:
        flash(f'事件 "{event_id}" 已存在', 'error')
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))
    
    cache['data'][tag_name]['events'][event_id] = get_default_event()
    if save_cached_data(filename):
        flash(f'事件 "{event_id}" 添加成功', 'success')
    else:
        flash('保存失败', 'error')
    
    return redirect(url_for('event_edit', filename=filename, tag_name=tag_name, event_id=event_id))


@app.route('/tag/<filename>/<tag_name>/delete_event/<event_id>', methods=['POST'])
def delete_event(filename, tag_name, event_id):
    """Delete an event from a tag."""
    cache = get_cached_data(filename)
    if tag_name in cache['data'] and 'events' in cache['data'][tag_name]:
        if event_id in cache['data'][tag_name]['events']:
            del cache['data'][tag_name]['events'][event_id]
            if save_cached_data(filename):
                flash(f'事件 "{event_id}" 已删除', 'success')
            else:
                flash('保存失败', 'error')
        else:
            flash(f'事件 "{event_id}" 不存在', 'error')
    
    return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))


@app.route('/tag/<filename>/<tag_name>/move_event/<event_id>/<direction>', methods=['POST'])
def move_event(filename, tag_name, event_id, direction):
    """Move an event up or down in the list."""
    cache = get_cached_data(filename)
    
    if tag_name not in cache['data'] or 'events' not in cache['data'][tag_name]:
        flash('标签不存在', 'error')
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))
    
    events_dict = cache['data'][tag_name]['events']
    event_ids = list(events_dict.keys())
    
    if event_id not in event_ids:
        flash('事件不存在', 'error')
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))
    
    current_idx = event_ids.index(event_id)
    
    if direction == 'up' and current_idx > 0:
        # Swap with previous
        event_ids[current_idx], event_ids[current_idx - 1] = event_ids[current_idx - 1], event_ids[current_idx]
    elif direction == 'down' and current_idx < len(event_ids) - 1:
        # Swap with next
        event_ids[current_idx], event_ids[current_idx + 1] = event_ids[current_idx + 1], event_ids[current_idx]
    else:
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))
    
    # Rebuild events dict in new order
    new_events = {}
    for eid in event_ids:
        new_events[eid] = events_dict[eid]
    
    cache['data'][tag_name]['events'] = new_events
    
    if save_cached_data(filename):
        flash(f'事件 "{event_id}" 已移动', 'success')
    else:
        flash('保存失败', 'error')
    
    return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))


@app.route('/event/<filename>/<tag_name>/<event_id>', methods=['GET', 'POST'])
def event_edit(filename, tag_name, event_id):
    """Event editor page."""
    cache = get_cached_data(filename)
    
    if tag_name not in cache['data']:
        flash('标签不存在', 'error')
        return redirect(url_for('category', filename=filename))
    
    if 'events' not in cache['data'][tag_name] or event_id not in cache['data'][tag_name]['events']:
        flash('事件不存在', 'error')
        return redirect(url_for('tag_events', filename=filename, tag_name=tag_name))
    
    event_data = cache['data'][tag_name]['events'][event_id]
    
    if request.method == 'POST':
        # Update event data from form
        event_data['title'] = request.form.get('title', '').strip()
        event_data['description'] = request.form.get('description', '').strip()
        
        # Priority
        priority_str = request.form.get('priority', '0').strip()
        event_data['priority'] = int(priority_str) if priority_str.lstrip('-').isdigit() else 0
        
        # is_continue
        event_data['is_continue'] = 'is_continue' in request.form
        
        # allow_repeat
        event_data['allow_repeat'] = 'allow_repeat' in request.form
        
        # Build trigger_conditions from structured inputs
        trigger_conditions = {}
        
        # Age range
        age_min = request.form.get('age_min', '').strip()
        age_max = request.form.get('age_max', '').strip()
        if age_min or age_max:
            trigger_conditions['age_range'] = [
                int(age_min) if age_min else 0,
                int(age_max) if age_max else 100
            ]
        
        # Min attributes
        min_attrs = {}
        for attr in ['health', 'money', 'social', 'intelligence', 'luck', 'san', 'mystery']:
            val = request.form.get(f'min_{attr}', '').strip()
            if val:
                min_attrs[attr] = int(val)
        if min_attrs:
            trigger_conditions['min_attributes'] = min_attrs
        
        # Max attributes
        max_attrs = {}
        for attr in ['health', 'money', 'social', 'intelligence', 'luck', 'san', 'mystery']:
            val = request.form.get(f'max_{attr}', '').strip()
            if val:
                max_attrs[attr] = int(val)
        if max_attrs:
            trigger_conditions['max_attributes'] = max_attrs
        
        # Required tags
        required_tags_str = request.form.get('required_tags', '').strip()
        if required_tags_str:
            trigger_conditions['required_tags'] = [t.strip() for t in required_tags_str.split(',') if t.strip()]
        
        # Excluded tags
        excluded_tags_str = request.form.get('excluded_tags', '').strip()
        if excluded_tags_str:
            trigger_conditions['excluded_tags'] = [t.strip() for t in excluded_tags_str.split(',') if t.strip()]
        
        # Min temp attribute
        min_temp = request.form.get('min_temp', '').strip()
        if min_temp:
            trigger_conditions['min_temp'] = int(min_temp)
        
        # Max temp attribute
        max_temp = request.form.get('max_temp', '').strip()
        if max_temp:
            trigger_conditions['max_temp'] = int(max_temp)
        
        event_data['trigger_conditions'] = trigger_conditions
        
        # Build options from structured inputs
        options = []
        option_count = int(request.form.get('option_count', '0'))
        
        # Collect all option indices that exist in the form
        option_indices = set()
        for key in request.form.keys():
            if key.startswith('option_text_'):
                try:
                    idx = int(key.replace('option_text_', ''))
                    option_indices.add(idx)
                except ValueError:
                    pass
        
        for idx in sorted(option_indices):
            option_text = request.form.get(f'option_text_{idx}', '').strip()
            option_result = request.form.get(f'option_result_{idx}', '').strip()
            
            if not option_text:
                continue
            
            option = {
                'text': option_text,
                'result': option_result if option_result else ''
            }
            
            # Effects
            effects = {}
            for attr in ['health', 'money', 'social', 'intelligence', 'luck', 'san', 'mystery', 'temp']:
                val = request.form.get(f'option_effect_{attr}_{idx}', '').strip()
                if val:
                    effects[attr] = int(val)
            if effects:
                option['effects'] = effects
            
            # Set attributes (direct set)
            set_attrs = {}
            for attr in ['health', 'money', 'social', 'intelligence', 'luck', 'san', 'mystery']:
                val = request.form.get(f'option_set_{attr}_{idx}', '').strip()
                if val:
                    set_attrs[attr] = int(val)
            
            # Temp attribute setting (single 'temp' attribute)
            set_temp = request.form.get(f'option_set_temp_{idx}', '').strip()
            if set_temp:
                set_attrs['temp'] = int(set_temp)
            
            if set_attrs:
                option['set_attributes'] = set_attrs
            
            # Add tags
            add_tags_str = request.form.get(f'option_add_tags_{idx}', '').strip()
            if add_tags_str:
                option['add_tags'] = [t.strip() for t in add_tags_str.split(',') if t.strip()]
            
            # Remove tags
            remove_tags_str = request.form.get(f'option_remove_tags_{idx}', '').strip()
            if remove_tags_str:
                option['remove_tags'] = [t.strip() for t in remove_tags_str.split(',') if t.strip()]
            
            # Continue event (support multiple IDs as array)
            continue_event_str = request.form.get(f'option_continue_event_{idx}', '').strip()
            if continue_event_str:
                # Check if multiple IDs separated by comma
                ids = [id.strip() for id in continue_event_str.split(',') if id.strip()]
                if len(ids) == 1:
                    option['continue_event'] = ids[0]
                elif len(ids) > 1:
                    option['continue_event'] = ids
            
            # Risk
            risk_str = request.form.get(f'option_risk_{idx}', '').strip()
            if risk_str:
                try:
                    option['risk'] = float(risk_str)
                except ValueError:
                    pass
            
            # Death reason
            death_reason = request.form.get(f'option_death_reason_{idx}', '').strip()
            if death_reason:
                option['death_reason'] = death_reason
            
            # Death flag
            if f'option_death_flag_{idx}' in request.form:
                option['death_flag'] = True
            
            # Conditional results - check structured inputs first
            conditional_results = []
            cond_idx = 0
            while True:
                cond_type = request.form.get(f'option_{idx}_cond_{cond_idx}_type', '').strip()
                cond_result = request.form.get(f'option_{idx}_cond_{cond_idx}_result', '').strip()
                
                if not cond_result:  # No more conditions
                    break
                
                cond_item = {'conditions': {}, 'result': cond_result}
                
                # Build conditions based on type
                if cond_type == 'default':
                    cond_item['conditions']['default'] = True
                elif cond_type == 'temp':
                    min_val = request.form.get(f'option_{idx}_cond_{cond_idx}_temp_min', '').strip()
                    if min_val:
                        cond_item['conditions']['min_temp'] = int(min_val)
                elif cond_type == 'attributes':
                    attr = request.form.get(f'option_{idx}_cond_{cond_idx}_attr', '').strip()
                    min_val = request.form.get(f'option_{idx}_cond_{cond_idx}_min', '').strip()
                    if attr and min_val:
                        cond_item['conditions']['min_attributes'] = {attr: int(min_val)}
                elif cond_type == 'tags':
                    # For tags, use dedicated tags field
                    tags_str = request.form.get(f'option_{idx}_cond_{cond_idx}_tags', '').strip()
                    if tags_str:
                        cond_item['conditions']['required_tags'] = [t.strip() for t in tags_str.split(',') if t.strip()]
                
                # Effects (format: "attr:value, attr2:value2")
                effects_str = request.form.get(f'option_{idx}_cond_{cond_idx}_effects', '').strip()
                if effects_str:
                    effects = {}
                    for pair in effects_str.split(','):
                        if ':' in pair:
                            k, v = pair.split(':', 1)
                            try:
                                effects[k.strip()] = int(v.strip())
                            except ValueError:
                                pass
                    if effects:
                        cond_item['effects'] = effects
                
                # Add tags
                add_tags_str = request.form.get(f'option_{idx}_cond_{cond_idx}_add_tags', '').strip()
                if add_tags_str:
                    cond_item['add_tags'] = [t.strip() for t in add_tags_str.split(',') if t.strip()]
                
                # Continue event
                continue_str = request.form.get(f'option_{idx}_cond_{cond_idx}_continue', '').strip()
                if continue_str:
                    ids = [id.strip() for id in continue_str.split(',') if id.strip()]
                    if len(ids) == 1:
                        cond_item['continue_event'] = ids[0]
                    elif len(ids) > 1:
                        cond_item['continue_event'] = ids
                
                conditional_results.append(cond_item)
                cond_idx += 1
            
            # Fallback to JSON if no structured input found
            if not conditional_results:
                cond_results_str = request.form.get(f'option_conditional_results_{idx}', '').strip()
                if cond_results_str:
                    try:
                        conditional_results = json.loads(cond_results_str)
                    except json.JSONDecodeError:
                        flash(f'选项 {idx+1} 的条件结果JSON格式错误', 'error')
            
            if conditional_results:
                option['conditional_results'] = conditional_results
            
            options.append(option)
        
        event_data['options'] = options
        
        if save_cached_data(filename):
            flash('事件保存成功', 'success')
        else:
            flash('保存失败', 'error')
        
        return redirect(url_for('event_edit', filename=filename, tag_name=tag_name, event_id=event_id))
    
    display_name = FILE_DISPLAY_NAMES.get(filename, filename)
    return render_template('event_edit.html',
                         filename=filename,
                         display_name=display_name,
                         tag_name=tag_name,
                         event_id=event_id,
                         event=event_data)


@app.route('/reload/<filename>')
def reload_file(filename):
    """Force reload a file from disk."""
    clear_cache(filename)
    flash(f'文件 "{filename}" 已重新加载', 'success')
    return redirect(url_for('category', filename=filename))


@app.route('/api/event/<filename>/<tag_name>/<event_id>')
def api_get_event(filename, tag_name, event_id):
    """API: Get event data as JSON."""
    cache = get_cached_data(filename)
    if tag_name in cache['data'] and 'events' in cache['data'][tag_name]:
        event = cache['data'][tag_name]['events'].get(event_id)
        if event:
            return jsonify(event)
    return jsonify({'error': 'Event not found'}), 404


# ===== Achievements Routes =====

@app.route('/achievements')
def achievements_list():
    """List all achievements."""
    achievements = load_achievements()
    return render_template('achievements.html', achievements=achievements)


@app.route('/achievements/add', methods=['POST'])
def achievement_add():
    """Add a new achievement."""
    achievements = load_achievements()
    new_ach = get_default_achievement()
    
    # Generate unique ID
    base_id = 'new_achievement'
    counter = 1
    while any(a.get('id') == f'{base_id}_{counter}' for a in achievements):
        counter += 1
    new_ach['id'] = f'{base_id}_{counter}'
    new_ach['name'] = f'新成就_{counter}'
    
    achievements.append(new_ach)
    
    if save_achievements(achievements):
        flash('成就添加成功', 'success')
    else:
        flash('添加失败', 'error')
    
    return redirect(url_for('achievement_edit', achievement_id=new_ach['id']))


@app.route('/achievements/<achievement_id>', methods=['GET', 'POST'])
def achievement_edit(achievement_id):
    """Edit an achievement."""
    achievements = load_achievements()
    
    # Find the achievement
    ach_index = None
    ach_data = None
    for i, a in enumerate(achievements):
        if a.get('id') == achievement_id:
            ach_index = i
            ach_data = a
            break
    
    if ach_data is None:
        flash('成就不存在', 'error')
        return redirect(url_for('achievements_list'))
    
    if request.method == 'POST':
        # Update achievement data
        new_id = request.form.get('id', '').strip()
        if new_id and new_id != achievement_id:
            # Check if ID is unique
            if any(a.get('id') == new_id for a in achievements if a.get('id') != achievement_id):
                flash('ID已存在', 'error')
                return redirect(url_for('achievement_edit', achievement_id=achievement_id))
            achievements[ach_index]['id'] = new_id
        
        achievements[ach_index]['name'] = request.form.get('name', '').strip() or '未命名'
        achievements[ach_index]['description'] = request.form.get('description', '').strip()
        achievements[ach_index]['icon'] = request.form.get('icon', '🏆').strip()
        
        stars_str = request.form.get('stars', '1').strip()
        try:
            achievements[ach_index]['stars'] = int(stars_str)
        except ValueError:
            achievements[ach_index]['stars'] = 1
        
        achievements[ach_index]['tag'] = request.form.get('tag', '').strip()
        achievements[ach_index]['golden'] = 'golden' in request.form
        
        condition = request.form.get('condition', '').strip()
        if condition:
            achievements[ach_index]['condition'] = condition
        elif 'condition' in achievements[ach_index]:
            del achievements[ach_index]['condition']
        
        if save_achievements(achievements):
            flash('成就保存成功', 'success')
        else:
            flash('保存失败', 'error')
        
        return redirect(url_for('achievement_edit', achievement_id=achievements[ach_index]['id']))
    
    return render_template('achievement_edit.html', achievement=ach_data)


@app.route('/achievements/<achievement_id>/delete', methods=['POST'])
def achievement_delete(achievement_id):
    """Delete an achievement."""
    achievements = load_achievements()
    
    # Find and remove
    new_achievements = [a for a in achievements if a.get('id') != achievement_id]
    
    if len(new_achievements) == len(achievements):
        flash('成就不存在', 'error')
    elif save_achievements(new_achievements):
        flash('成就已删除', 'success')
    else:
        flash('删除失败', 'error')
    
    return redirect(url_for('achievements_list'))


if __name__ == '__main__':
    import socket
    def get_ip():
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            s.connect(('8.8.8.8', 80))
            ip = s.getsockname()[0]
        except Exception:
            ip = '127.0.0.1'
        finally:
            s.close()
        return ip

    local_ip = get_ip()
    print("=" * 50)
    print("  Life Simulator Event Manager")
    print(f"  监听地址: 0.0.0.0:5000 (允许任何设备访问)")
    print(f"  本地访问: http://127.0.0.1:5000")
    print(f"  局域网访问: http://{local_ip}:5000")
    print("=" * 50)
    app.run(host='0.0.0.0', debug=True, port=5000)

