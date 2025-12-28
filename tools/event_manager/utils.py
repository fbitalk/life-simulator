"""
Event Manager Utilities
Handles parsing and writing JavaScript event files.
"""
import os
import re
import json
from pathlib import Path

# Path to the events directory relative to this file
EVENTS_DIR = Path(__file__).parent.parent.parent / "js" / "events"

# Mapping of file names to display names
FILE_DISPLAY_NAMES = {
    "maleEvents.js": "男性事件",
    "femaleEvents.js": "女性事件",
    "ageEvents.js": "年龄段事件",
    "commonEvents.js": "通用事件",
    "redEvents.js": "红色标签事件",
    "blackEvents.js": "黑色标签事件",
    "purpleEvents.js": "紫色标签事件",
    "pinkEvents.js": "粉色标签事件",
    "goldEvents.js": "金色标签事件",
    "startEvents.js": "开局事件 (废弃)",
}


def get_all_event_files():
    """Get all event files in the events directory."""
    if not EVENTS_DIR.exists():
        return []
    
    files = []
    for f in EVENTS_DIR.glob("*Events.js"):
        files.append({
            "filename": f.name,
            "display_name": FILE_DISPLAY_NAMES.get(f.name, f.stem),
            "path": str(f)
        })
    return sorted(files, key=lambda x: x["filename"])


def parse_js_to_dict(js_content: str) -> dict:
    """
    Parse JavaScript object literal to Python dict.
    Handles:
    - Single-line comments (// ...)
    - Trailing commas
    - Unquoted keys
    """
    # Find the main object content between { and the last }
    # Pattern: const varName = { ... };
    pattern = r'const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*(?://.*)?$'
    
    # Try to find the object
    match = re.search(r'const\s+\w+\s*=\s*(\{[\s\S]*\})\s*;', js_content, re.MULTILINE)
    if not match:
        # Try without semicolon
        match = re.search(r'const\s+\w+\s*=\s*(\{[\s\S]*\})', js_content, re.MULTILINE)
    
    if not match:
        return {}
    
    obj_str = match.group(1)
    
    # Remove single-line comments (but be careful not to remove strings containing //)
    # This is a simplified approach - remove lines that are just comments
    lines = obj_str.split('\n')
    cleaned_lines = []
    for line in lines:
        # Remove inline comments (after code)
        # Be careful with strings containing //
        in_string = False
        string_char = None
        result = []
        i = 0
        while i < len(line):
            char = line[i]
            if in_string:
                result.append(char)
                if char == '\\' and i + 1 < len(line):
                    result.append(line[i + 1])
                    i += 2
                    continue
                if char == string_char:
                    in_string = False
            else:
                if char in '"\'':
                    in_string = True
                    string_char = char
                    result.append(char)
                elif char == '/' and i + 1 < len(line) and line[i + 1] == '/':
                    # Found comment, stop here
                    break
                else:
                    result.append(char)
            i += 1
        cleaned_lines.append(''.join(result))
    
    obj_str = '\n'.join(cleaned_lines)
    
    # Remove trailing commas before } or ]
    obj_str = re.sub(r',(\s*[}\]])', r'\1', obj_str)
    
    # Quote unquoted keys (JavaScript allows unquoted keys)
    # Match: key: or key : (not already quoted)
    obj_str = re.sub(r'(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', obj_str)
    
    # Handle special values
    obj_str = obj_str.replace('Infinity', '999999999')
    
    # Remove leading + signs from numbers (JS allows +20, JSON does not)
    obj_str = re.sub(r':\s*\+(\d)', r': \1', obj_str)
    
    try:
        return json.loads(obj_str)
    except json.JSONDecodeError as e:
        print(f"JSON Parse Error: {e}")
        print(f"Problematic content around error:\n{obj_str[max(0,e.pos-100):e.pos+100]}")
        return {}


def dict_to_js(data: dict, var_name: str, header_comment: str = "") -> str:
    """
    Convert Python dict back to JavaScript file content.
    """
    json_str = json.dumps(data, ensure_ascii=False, indent=4)
    
    # Build the file content
    lines = []
    if header_comment:
        lines.append(header_comment)
    lines.append(f"const {var_name} = {json_str};")
    lines.append("")
    lines.append(f"window.{var_name} = {var_name};")
    lines.append("")
    
    return '\n'.join(lines)


def read_file_with_encoding(filepath):
    """
    Try to read a file with multiple encodings.
    Returns the content as string.
    """
    encodings = ['utf-8-sig', 'utf-16', 'utf-16-le', 'utf-8', 'gbk', 'gb2312']
    
    for encoding in encodings:
        try:
            with open(filepath, 'r', encoding=encoding) as f:
                content = f.read()
                # Verify it looks like valid JS
                if 'const' in content or 'var' in content or 'let' in content:
                    return content, encoding
        except (UnicodeDecodeError, UnicodeError):
            continue
    
    # Fallback: read as binary and decode
    try:
        with open(filepath, 'rb') as f:
            raw = f.read()
        # Try to detect BOM
        if raw.startswith(b'\xff\xfe'):
            return raw.decode('utf-16-le'), 'utf-16-le'
        elif raw.startswith(b'\xfe\xff'):
            return raw.decode('utf-16-be'), 'utf-16-be'
        elif raw.startswith(b'\xef\xbb\xbf'):
            return raw.decode('utf-8-sig'), 'utf-8-sig'
        else:
            return raw.decode('utf-8', errors='replace'), 'utf-8'
    except Exception as e:
        print(f"Error reading file {filepath}: {e}")
        return "", "utf-8"


def load_event_file(filename: str) -> tuple:
    """
    Load and parse an event file.
    Returns (data_dict, var_name, header_comment)
    """
    filepath = EVENTS_DIR / filename
    if not filepath.exists():
        return {}, "", ""
    
    content, detected_encoding = read_file_with_encoding(filepath)
    if not content:
        print(f"Could not read file: {filename}")
        return {}, "", ""
    
    print(f"Loaded {filename} with encoding: {detected_encoding}")
    
    # Extract variable name
    var_match = re.search(r'const\s+(\w+)\s*=', content)
    var_name = var_match.group(1) if var_match else "events"
    
    # Extract header comment (lines starting with // before const)
    header_lines = []
    for line in content.split('\n'):
        stripped = line.strip()
        if stripped.startswith('//') or stripped == '':
            header_lines.append(line)
        elif stripped.startswith('const'):
            break
        else:
            break
    header_comment = '\n'.join(header_lines)
    
    data = parse_js_to_dict(content)
    
    return data, var_name, header_comment


def save_event_file(filename: str, data: dict, var_name: str, header_comment: str = "") -> bool:
    """
    Save event data back to JavaScript file.
    """
    filepath = EVENTS_DIR / filename
    
    try:
        content = dict_to_js(data, var_name, header_comment)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error saving file: {e}")
        return False


def get_default_event():
    """Return a default event structure."""
    return {
        "title": "新事件",
        "description": "事件描述",
        "priority": 0,
        "is_continue": False,
        "allow_repeat": False,
        "trigger_conditions": {
            "age_range": [0, 666]
        },
        "options": [
            {
                "text": "选项1",
                "result": "结果描述",
                "effects": {}
            }
        ]
    }


def get_default_option():
    """Return a default option structure."""
    return {
        "text": "新选项",
        "result": "结果描述",
        "effects": {}
    }


# ===== Achievements Functions =====

ACHIEVEMENTS_FILE = Path(__file__).parent.parent.parent / "js" / "achievements.js"


def load_achievements():
    """
    Load achievements from achievements.js.
    Returns list of achievement objects.
    """
    if not ACHIEVEMENTS_FILE.exists():
        return []
    
    content, _ = read_file_with_encoding(ACHIEVEMENTS_FILE)
    if not content:
        return []
    
    # Find the achievements array
    # Pattern: achievements: [ ... ]
    match = re.search(r'achievements:\s*\[([\s\S]*?)\](?=\s*,\s*(?:\/\/|[a-zA-Z_]|\}))', content)
    if not match:
        # Try alternate pattern - find until closing bracket
        match = re.search(r'achievements:\s*\[([\s\S]*?)\]\s*,', content)
    
    if not match:
        print("Could not find achievements array")
        return []
    
    array_content = '[' + match.group(1) + ']'
    
    # Clean up JS to JSON
    # Remove comments and handle single quotes
    lines = array_content.split('\n')
    cleaned_lines = []
    
    for line in lines:
        cleaned_line = []
        i = 0
        length = len(line)
        in_string = None  # None, "'", or '"'
        
        while i < length:
            char = line[i]
            
            if in_string:
                if char == '\\':
                    # Handle escape sequence
                    if i + 1 < length:
                        next_char = line[i + 1]
                        if in_string == "'" and next_char == "'":
                            # Unescape \' inside single quoted string -> '
                            cleaned_line.append("'")
                            i += 2
                            continue
                        elif in_string == "'" and next_char == '"':
                            # Keep \" inside single quoted string as is? 
                            # No, if it was escaped in single quote, it was probably not needed but valid.
                            # But wait, inside '...', " does not need escape. 
                            # If it WAS escaped, we keep it escaped.
                            cleaned_line.append('\\')
                            cleaned_line.append('"')
                            i += 2
                            continue
                        else:
                            # Other escapes, keep as is
                            cleaned_line.append(char)
                            cleaned_line.append(next_char)
                            i += 2
                            continue
                    else:
                        cleaned_line.append(char)
                        i += 1
                        continue
                
                if char == in_string:
                    # End of string
                    cleaned_line.append('"') # Always close with double quote
                    in_string = None
                elif in_string == "'" and char == '"':
                    # Double quote inside single quoted string -> escape it
                    cleaned_line.append('\\"')
                else:
                    cleaned_line.append(char)
                
            else:
                # Not in string
                if char == "'":
                    in_string = "'"
                    cleaned_line.append('"') # Start with double quote
                elif char == '"':
                    in_string = '"'
                    cleaned_line.append('"')
                elif char == '/' and i + 1 < length and line[i + 1] == '/':
                    # Single line comment
                    break
                else:
                    cleaned_line.append(char)
            
            i += 1
            
        cleaned_lines.append(''.join(cleaned_line))
    
    array_str = '\n'.join(cleaned_lines)
    
    # Remove trailing commas
    array_str = re.sub(r',(\s*[}\]])', r'\1', array_str)
    
    # Quote unquoted keys manually (safer)
    final_str = ""
    length = len(array_str)
    curr = 0
    in_string = False
    key_pattern = re.compile(r'([a-zA-Z_][a-zA-Z0-9_]*)\s*:')
    
    while curr < length:
        char = array_str[curr]
        
        if char == '"':
            # Check escape
            bk = 0
            bki = curr - 1
            while bki >= 0 and array_str[bki] == '\\':
                bk += 1
                bki -= 1
            if bk % 2 == 0:
                in_string = not in_string
        
        if not in_string and char.isalpha() or char == '_':
            # Check for key pattern
            m = key_pattern.match(array_str, curr)
            if m:
                final_str += f'"{m.group(1)}":'
                curr = m.end()
                continue
        
        final_str += char
        curr += 1
    
    try:
        return json.loads(final_str)
    except json.JSONDecodeError as e:
        print(f"Error parsing achievements: {e}")
        return []


def save_achievements(achievements: list) -> bool:
    """
    Save achievements back to achievements.js.
    Preserves the file structure and only updates the achievements array.
    """
    if not ACHIEVEMENTS_FILE.exists():
        return False
    
    content, _ = read_file_with_encoding(ACHIEVEMENTS_FILE)
    if not content:
        return False
    
    # Find the achievements array and replace it
    achievements_json = json.dumps(achievements, ensure_ascii=False, indent=8)
    # Indent the array content properly
    achievements_json = achievements_json.replace('\n', '\n        ')
    
    # Pattern to match the achievements array
    pattern = r'(achievements:\s*)\[[\s\S]*?\](\s*,\s*(?:\/\/|[a-zA-Z_]|\}))'
    
    def replacement(m):
        return m.group(1) + achievements_json + m.group(2)
    
    new_content, count = re.subn(pattern, replacement, content, count=1)
    
    if count == 0:
        # Try simpler pattern
        pattern2 = r'(achievements:\s*)\[[\s\S]*?\](\s*,)'
        new_content, count = re.subn(pattern2, replacement, content, count=1)
    
    if count == 0:
        print("Could not find achievements array to replace")
        return False
    
    try:
        with open(ACHIEVEMENTS_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    except Exception as e:
        print(f"Error saving achievements: {e}")
        return False


def get_default_achievement():
    """Return a default achievement structure."""
    return {
        "id": "new_achievement",
        "name": "新成就",
        "description": "成就描述",
        "icon": "🏆",
        "stars": 1,
        "tag": "",
        "unlocked": False
    }
