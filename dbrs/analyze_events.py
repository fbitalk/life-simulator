#!/usr/bin/env python3
"""分析 dbrs 事件数据：标签体系、事件线、触发条件、连续逻辑"""
import json
import os
from collections import defaultdict, Counter

BASE = os.path.dirname(os.path.abspath(__file__))
INPUT = os.path.join(BASE, "doubi_events.json")

with open(INPUT, "r", encoding="utf-8") as f:
    events = json.load(f)

print(f"=== 总事件数: {len(events)} ===\n")

# ============================================================
# 1. 标签体系分析
# ============================================================
all_required_tags = Counter()
all_add_tags = Counter()
all_remove_tags = Counter()
all_attr_keys = Counter()
all_titles = Counter()  # option title 即获得的标签名
sex_dist = Counter()
age_ranges = Counter()

for evt in events:
    cond = evt["conditions"]
    for t in cond["required_tags"]:
        all_required_tags[t] += 1
    sex_dist[cond["sex"]] += 1
    age_key = f"{cond['age_min']}-{cond['age_max']}"
    age_ranges[age_key] += 1

    for opt in evt["options"]:
        for t in opt["add_tags"]:
            if t:
                all_add_tags[t] += 1
        for t in opt["remove_tags"]:
            if t:
                all_remove_tags[t] += 1
        for ac in opt.get("attr_changes", []):
            key = ac.get("key", "?")
            all_attr_keys[key] += 1
        if opt.get("title") and opt["title"] != "=INHERIT=":
            all_titles[opt["title"]] += 1

print("=== 性别限制分布 ===")
for k, v in sorted(sex_dist.items()):
    label = {-1: "任意", 0: "男", 1: "女"}.get(k, str(k))
    print(f"  {label}: {v}")

print(f"\n=== 独立标签统计 ===")
print(f"  作为触发条件的标签: {len(all_required_tags)}")
print(f"  作为添加结果的标签: {len(all_add_tags)}")
print(f"  作为移除目标的标签: {len(all_remove_tags)}")

# 找出既是触发条件又是添加结果的标签 (核心流转标签)
core_tags = set(all_required_tags.keys()) & set(all_add_tags.keys())
print(f"  核心流转标签 (既触发又被添加): {len(core_tags)}")

# 找出高频触发标签
print(f"\n=== Top 30 触发条件标签 ===")
for tag, count in all_required_tags.most_common(30):
    print(f"  {tag}: {count}次")

print(f"\n=== Top 30 添加结果标签 ===")
for tag, count in all_add_tags.most_common(30):
    print(f"  {tag}: {count}次")

print(f"\n=== Top 30 属性键 ===")
for key, count in all_attr_keys.most_common(30):
    print(f"  {key}: {count}次")

# ============================================================
# 2. 事件线分析 - 构建标签流转图
# ============================================================
print(f"\n\n=== 事件线分析 ===")

# 构建 "标签A -> 标签B" 的流转关系
# 即事件需要标签A，选项添加标签B
tag_flow = defaultdict(lambda: defaultdict(list))  # from_tag -> to_tag -> [event_ids]

for evt in events:
    for req_tag in evt["conditions"]["required_tags"]:
        for opt in evt["options"]:
            for add_tag in opt["add_tags"]:
                if add_tag and add_tag != req_tag:
                    tag_flow[req_tag][add_tag].append(evt["id"])

# 找出主要的流转路径
print("\n主要标签流转路径 (触发标签 -> 获得标签，>=3个事件):")
flow_edges = []
for from_tag, to_tags in tag_flow.items():
    for to_tag, evt_ids in to_tags.items():
        if len(evt_ids) >= 3:
            flow_edges.append((from_tag, to_tag, len(evt_ids), evt_ids))

flow_edges.sort(key=lambda x: -x[2])
for from_tag, to_tag, count, evt_ids in flow_edges[:50]:
    print(f"  [{from_tag}] -> [{to_tag}]: {count}个事件 (IDs: {evt_ids[:5]}...)")

# ============================================================
# 3. 按触发标签分组事件
# ============================================================
print(f"\n\n=== 按触发标签分组事件 ===")
tag_events = defaultdict(list)
for evt in events:
    for tag in evt["conditions"]["required_tags"]:
        tag_events[tag].append(evt)

# 每个标签的事件数量
print(f"\n拥有事件数最多的标签 Top 40:")
for tag, evts in sorted(tag_events.items(), key=lambda x: -len(x[1]))[:40]:
    # 统计该标签下事件的性别分布
    male_cnt = sum(1 for e in evts if e["conditions"]["sex"] == 0)
    female_cnt = sum(1 for e in evts if e["conditions"]["sex"] == 1)
    any_cnt = sum(1 for e in evts if e["conditions"]["sex"] == -1)
    print(f"  [{tag}]: {len(evts)}个事件 (男:{male_cnt} 女:{female_cnt} 任意:{any_cnt})")

# ============================================================
# 4. 识别"事件线" - 标签链
# ============================================================
print(f"\n\n=== 核心事件线识别 ===")

# 找到只有"未出生"作为触发条件的事件 (开局事件)
start_events = tag_events.get("未出生", [])
print(f"\n开局事件 (触发标签=未出生): {len(start_events)}个")
for evt in start_events:
    add_tags = []
    for opt in evt["options"]:
        add_tags.extend([t for t in opt["add_tags"] if t])
    print(f"  ID:{evt['id']} [{evt['title']}] -> 可获得: {', '.join(set(add_tags))}")

# 递归追踪标签链
def trace_tag_chain(start_tag, depth=0, max_depth=4, visited=None):
    """递归追踪从一个标签出发的事件链"""
    if visited is None:
        visited = set()
    if depth > max_depth or start_tag in visited:
        return []
    visited.add(start_tag)

    chains = []
    evts = tag_events.get(start_tag, [])

    for evt in evts:
        for opt in evt["options"]:
            for add_tag in opt["add_tags"]:
                if add_tag and add_tag != start_tag and add_tag in tag_events:
                    sub_chains = trace_tag_chain(add_tag, depth+1, max_depth, visited.copy())
                    if sub_chains:
                        for sub in sub_chains:
                            chains.append([(start_tag, evt["id"], evt["title"])] + sub)
                    else:
                        chains.append([(start_tag, evt["id"], evt["title"]), (add_tag, None, None)])
    return chains

print("\n从开局标签追踪事件链 (depth<=3):")
for evt in start_events[:10]:  # 只追踪前10个开局事件
    for opt in evt["options"]:
        for add_tag in opt["add_tags"]:
            if add_tag and add_tag in tag_events:
                chains = trace_tag_chain(add_tag, depth=0, max_depth=3)
                for chain in chains[:2]:  # 每个最多2条
                    path = " -> ".join([f"[{tag}]" for tag, _, _ in chain])
                    print(f"  {path}")

# ============================================================
# 5. 属性变化类型分析
# ============================================================
print(f"\n\n=== 属性变化类型分析 ===")
attr_ops = Counter()
for evt in events:
    for opt in evt["options"]:
        for ac in opt.get("attr_changes", []):
            attr_ops[ac.get("type", "?")] += 1
print(f"  操作类型: {dict(attr_ops)}")

# 分离显性属性和隐性属性
visible_attrs = set()
hidden_attrs = set()
for key in all_attr_keys:
    if "=HIDDEN=" in key or "=HIDEVAL=" in key:
        hidden_attrs.add(key)
    else:
        visible_attrs.add(key)

print(f"\n  显性属性 ({len(visible_attrs)}个): {sorted(visible_attrs)[:50]}...")
print(f"  隐性属性 ({len(hidden_attrs)}个): {sorted(hidden_attrs)[:30]}...")

# ============================================================
# 6. 事件标题模式分析
# ============================================================
print(f"\n\n=== 事件标题 (option.title) Top 30 ===")
for title, count in all_titles.most_common(30):
    print(f"  {title}: {count}次")

# ============================================================
# 7. 年龄阶段分布
# ============================================================
print(f"\n\n=== 年龄阶段分布 (Top 20) ===")
for age_key, count in age_ranges.most_common(20):
    print(f"  {age_key}岁: {count}个事件")

# ============================================================
# 8. 输出完整的事件-标签映射表
# ============================================================
print(f"\n\n=== 生成详细事件线报告 ===")

# 按主要故事线分组
storylines = defaultdict(list)

# 开局线
for evt in events:
    req_tags = evt["conditions"]["required_tags"]
    if not req_tags:
        storyline = "无触发条件"
    elif "未出生" in req_tags:
        storyline = "开局/出生"
    elif "上学" in req_tags or "学生" in req_tags:
        storyline = "学生/学校"
    elif "工作" in req_tags or any("工作" in t for t in req_tags):
        storyline = "工作/职业"
    elif "修仙" in req_tags or "修真" in req_tags or "化神" in req_tags:
        storyline = "修仙/修真"
    elif "鬼修" in req_tags:
        storyline = "鬼修"
    elif "龙珠" in req_tags or "赛亚人" in req_tags:
        storyline = "龙珠/赛亚人"
    elif any(t in req_tags for t in ["警察", "军人", "小偷", "罪犯", "律师"]):
        storyline = "犯罪/执法"
    elif any(t in req_tags for t in ["恋爱", "结婚", "已婚", "单身"]):
        storyline = "恋爱/婚姻"
    elif any(t in req_tags for t in ["富二代", "富有", "贫困", "财富"]):
        storyline = "财富/经济"
    elif any(t in req_tags for t in ["生病", "健康", "体弱", "死亡"]):
        storyline = "健康/生死"
    elif "孤儿" in req_tags:
        storyline = "孤儿线"
    elif "天网" in req_tags or "机器" in req_tags:
        storyline = "天网/科技"
    else:
        # 尝试匹配第一个核心标签
        storyline = req_tags[0] if req_tags else "其他"

    storylines[storyline].append(evt)

print(f"\n故事线分布:")
for name, evts in sorted(storylines.items(), key=lambda x: -len(x[1])):
    tags_in_line = set()
    for e in evts:
        for t in e["conditions"]["required_tags"]:
            tags_in_line.add(t)
    print(f"  {name}: {len(evts)}个事件, 涉及标签: {', '.join(sorted(tags_in_line)[:10])}")

print(f"\n\n=== 分析完成 ===")
