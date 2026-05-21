#!/usr/bin/env python3
"""深度分析 dbrs 事件数据，生成结构化报告（UTF-8 编码到文件）"""
import json
import os
from collections import defaultdict, Counter

BASE = os.path.dirname(os.path.abspath(__file__))
INPUT = os.path.join(BASE, "doubi_events.json")
OUTPUT = os.path.join(BASE, "event_analysis_report.md")

with open(INPUT, "r", encoding="utf-8") as f:
    events = json.load(f)

lines = []
def p(s=""):
    lines.append(s)

# ============================================================
# 标签-事件索引
# ============================================================
tag_events = defaultdict(list)
tag_added_by = defaultdict(set)  # 哪些事件(option)会添加这个标签
tag_removed_by = defaultdict(set)

for evt in events:
    for tag in evt["conditions"]["required_tags"]:
        tag_events[tag].append(evt)
    for opt in evt["options"]:
        for tag in opt["add_tags"]:
            if tag:
                tag_added_by[tag].add(evt["id"])
        for tag in opt["remove_tags"]:
            if tag:
                tag_removed_by[tag].add(evt["id"])

# ============================================================
# 构建完整的标签流转图
# ============================================================
# 标签 -> 可获得的下游标签 (通过事件)
tag_downstream = defaultdict(lambda: defaultdict(list))
for evt in events:
    for req_tag in evt["conditions"]["required_tags"]:
        for opt in evt["options"]:
            for add_tag in opt["add_tags"]:
                if add_tag and add_tag != req_tag:
                    tag_downstream[req_tag][add_tag].append(evt["id"])

# ============================================================
# 核心故事线定义
# ============================================================
storyline_tags = {
    "出生/开局": ["未出生"],
    "富二代": ["富二代"],
    "孤儿": ["孤儿"],
    "贫困/逆袭": ["贫困", "之之人之之之之", "贫民窟"],
    "警察/执法": ["警察", "派出所", "协警"],
    "犯罪/黑道": ["小偷", "黑帮", "罪犯", "青色"],
    "修仙/修真": ["修仙", "修真", "鬼修", "化神", "筑基", "金丹", "元婴", "冥修", "修佛", "修魔"],
    "龙珠/赛亚人": ["赛亚人", "龙珠", "超级赛亚人", "卡卡罗特"],
    "学校/学生": ["学生", "上学", "大学生", "小学生", "医学生", "法学生"],
    "恋爱/婚姻": ["恋爱", "结婚", "已婚", "单身", "初恋", "暗恋"],
    "天网/科技": ["天网", "机器人", "人工智能", "仿生人"],
    "MC石头": ["MC石头"],
    "原神": ["原神", "原神初学者", "原神入门", "提瓦特"],
    "Furry": ["furry"],
    "疾病/健康": ["多病", "心脏病", "癌症", "艾滋病", "白血病", "骨折"],
    "演艺/娱乐": ["演员", "歌手", "偶像", "舞蹈", "AB站阿婆主"],
    "电竞/游戏": ["电竞", "英雄联盟", "王者荣耀", "CSGO"],
    "军营/从军": ["军营", "军人", "特种兵"],
    "政治/仕途": ["政治", "官场", "村长", "市长", "省委书记"],
    "极限运动": ["极限运动", "翼装飞行", "攀岩"],
    "经商/创业": ["经商", "企业", "创业", "老板"],
    "体育": ["运动员", "足球", "篮球", "拳击"],
    "魔法/奇幻": ["魔法", "霍格沃茨", "魔法学院"],
    "末日/生存": ["末日", "丧尸", "废土"],
    "美食": ["美食", "厨师"],
    "灵异/鬼怪": ["灵异", "鬼", "僵尸"],
}

# 故事线标签匹配函数
def match_storyline(evt):
    req_tags = evt["conditions"]["required_tags"]
    if not req_tags:
        return "无触发条件(980个通用事件)"

    for storyline, keywords in storyline_tags.items():
        for kw in keywords:
            for tag in req_tags:
                if kw in tag:
                    return storyline

    # 尝试用第一个标签的前缀匹配
    first_tag = req_tags[0]
    return f"标签:{first_tag}"

# 按故事线分组
storyline_events = defaultdict(list)
for evt in events:
    sl = match_storyline(evt)
    storyline_events[sl].append(evt)

# ============================================================
# 生成报告
# ============================================================
p("# 豆比人生 (dbrs) 事件数据深度分析报告")
p()
p(f"**事件总数**: {len(events)}")
p(f"**独立标签数**: {len(set(list(tag_events.keys()) + list(tag_added_by.keys())))}")
p(f"**作为触发条件的标签**: {len(tag_events)}")
p(f"**作为添加结果的标签**: {len(tag_added_by)}")
p(f"**核心流转标签(既触发又被添加)**: {len(set(tag_events.keys()) & set(tag_added_by.keys()))}")
p()

# --- 故事线分布 ---
p("## 一、故事线分类汇总")
p()
p("| 故事线 | 事件数 | 主要标签 |")
p("|--------|--------|----------|")

sl_sorted = sorted(storyline_events.items(), key=lambda x: -len(x[1]))
for sl_name, evts in sl_sorted:
    tags_in_sl = set()
    for e in evts:
        for t in e["conditions"]["required_tags"]:
            tags_in_sl.add(t)
    tag_str = ", ".join(sorted(tags_in_sl)[:8])
    if len(tags_in_sl) > 8:
        tag_str += f" ... (+{len(tags_in_sl)-8}个)"
    p(f"| {sl_name} | {len(evts)} | {tag_str} |")

p()

# --- 详细事件线 ---
p("## 二、按触发标签分组的事件详情")
p()

# 只输出有事件的标签（>=5个事件）
for tag in sorted(tag_events.keys(), key=lambda t: -len(tag_events[t])):
    evts = tag_events[tag]
    if len(evts) < 5:
        continue

    p(f"### [{tag}] - {len(evts)}个事件")
    p()

    # 该标签可通过哪些上游标签获得
    upstream = {tid for tid, tags in tag_added_by.items() if tag in tags or any(t == tag for t in (tags if isinstance(tags, set) else []))}

    # 该标签可流转到哪些下游标签
    downstream = tag_downstream.get(tag, {})

    if upstream:
        # upstream 是事件ID集合，需要找出对应的标签
        upstream_tags = []
        for evt in events:
            if evt["id"] in upstream:
                for opt in evt["options"]:
                    if tag in opt["add_tags"]:
                        for rt in evt["conditions"]["required_tags"]:
                            if rt not in upstream_tags:
                                upstream_tags.append(rt)
        if upstream_tags:
            p(f"**上游标签**: {', '.join(upstream_tags[:5])}")

    if downstream:
        ds_list = sorted(downstream.keys(), key=lambda k: -len(downstream[k]))
        p(f"**下游标签**: {', '.join(ds_list[:10])}")

    p()
    p("| ID | 标题 | 年龄 | 性别 | 选项获得标签 | 属性变更(显性) |")
    p("|----|------|------|------|-------------|---------------|")

    for evt in evts:
        cond = evt["conditions"]
        sex_map = {-1: "任意", 0: "男", 1: "女"}
        sex = sex_map.get(cond["sex"], "?")
        age = f"{cond['age_min']}-{cond['age_max']}"

        for i, opt in enumerate(evt["options"]):
            add_tags = [t for t in opt["add_tags"] if t]
            # 只收集显性属性
            vis_attrs = []
            for ac in opt.get("attr_changes", []):
                key = ac.get("key", "?")
                if "=HIDDEN=" not in key and "=HIDEVAL=" not in key:
                    vis_attrs.append(f"{key} {ac.get('type','')} {ac.get('value','')}")

            opt_str = f"选项{i+1}: "
            if add_tags:
                opt_str += f"+{','.join(add_tags)}"
            if vis_attrs:
                opt_str += f" [{', '.join(vis_attrs[:3])}]"

            if i == 0:
                p(f"| {evt['id']} | {evt['title']} | {age} | {sex} | {opt_str} |")
            else:
                p(f"| | | | | {opt_str} |")
    p()

# --- 开局事件 ---
p("## 三、开局事件 (34个)")
p()
start_evts = tag_events.get("未出生", [])
p("这些事件是玩家角色诞生的入口，决定角色初始属性和身份标签：")
p()
p("| ID | 标题 | 可获得标签 | 初始属性 | 特殊机制 |")
p("|----|------|-----------|----------|----------|")
for evt in start_evts:
    all_add = set()
    all_attrs = []
    for opt in evt["options"]:
        for t in opt["add_tags"]:
            if t and t != "未出生":
                all_add.add(t)
        for ac in opt.get("attr_changes", []):
            key = ac.get("key", "?")
            if "=HIDDEN=" not in key and "=HIDEVAL=" not in key:
                all_attrs.append(f"{key}={ac.get('value','')}")

    has_multi = "多选项" if len(evt["options"]) > 1 else "单选项"
    tag_str = ", ".join(sorted(all_add)[:6]) if all_add else "(无)"
    attr_str = ", ".join(all_attrs[:4]) if all_attrs else "(无)"
    p(f"| {evt['id']} | {evt['title']} | {tag_str} | {attr_str} | {has_multi} |")

p()

# --- 标签流转核心路径 ---
p("## 四、核心标签流转路径")
p()
p("以下展示主要的标签链：`上游标签 -> 事件 -> 下游标签`")
p()

# 找出有>=3个下游事件的标签流转
flow_pairs = []
for from_tag, to_tags in tag_downstream.items():
    for to_tag, evt_ids in to_tags.items():
        if len(evt_ids) >= 3:
            flow_pairs.append((from_tag, to_tag, len(evt_ids), evt_ids))

flow_pairs.sort(key=lambda x: -x[2])

p("| 上游标签 | 下游标签 | 事件数 | 示例事件ID |")
p("|----------|----------|--------|-----------|")
for from_tag, to_tag, count, evt_ids in flow_pairs[:40]:
    ids_str = ", ".join(str(x) for x in evt_ids[:5])
    p(f"| {from_tag} | {to_tag} | {count} | {ids_str} |")

p()

# --- 年龄阶段分布 ---
p("## 五、年龄阶段分布")
p()
age_groups = Counter()
for evt in events:
    amin = evt["conditions"]["age_min"]
    amax = evt["conditions"]["age_max"]
    if amax >= 65535:
        age_groups[f">={amin}岁(无上限)"] += 1
    elif amin == amax:
        age_groups[f"精确{amin}岁"] += 1
    elif amin <= 5 and amax <= 15:
        age_groups["童年(0-15)"] += 1
    elif amin <= 20 and amax <= 30:
        age_groups["青年(15-30)"] += 1
    elif amin <= 40:
        age_groups["中年(20-60)"] += 1
    else:
        age_groups[f"{amin}-{amax}岁"] += 1

p("| 年龄阶段 | 事件数 |")
p("|----------|--------|")
for grp, cnt in age_groups.most_common(15):
    p(f"| {grp} | {cnt} |")

p()

# --- 性别分布 ---
p("## 六、性别限制分布")
p()
sex_dist = Counter(evt["conditions"]["sex"] for evt in events)
p("| 性别限制 | 事件数 | 占比 |")
p("|----------|--------|------|")
for k, v in sorted(sex_dist.items()):
    label = {-1: "任意性别", 0: "仅男性", 1: "仅女性"}.get(k, str(k))
    p(f"| {label} | {v} | {v/len(events)*100:.1f}% |")

p()

# --- 属性体系 ---
p("## 七、属性系统对比")
p()
attr_keys = Counter()
for evt in events:
    for opt in evt["options"]:
        for ac in opt.get("attr_changes", []):
            attr_keys[ac.get("key", "?")] += 1

visible = {k: v for k, v in attr_keys.items() if "=HIDDEN=" not in k and "=HIDEVAL=" not in k}
hidden = {k: v for k, v in attr_keys.items() if "=HIDDEN=" in k or "=HIDEVAL=" in k}

p(f"**显性属性** ({len(visible)}个) - 对应人生模拟器的 attributes:")
p()
p("| dbrs属性 | 出现次数 | 模拟器对应 |")
p("|----------|----------|-----------|")
dbrs_to_ls = {
    "健康": "health", "财富": "money", "智力": "intelligence",
    "学习成绩": "(新增)", "大学时光": "(新增)", "同情分": "(新增)",
    "武力值": "(新增)", "魅力值": "social", "运气": "luck",
    "名望值": "(新增)", "道德值": "(新增)", "颜值": "(新增)",
    "快乐值": "(新增)", "体力值": "(新增)", "精神力": "(新增)",
    "虔诚度": "(新增)", "信仰值": "(新增)",
}
for key, cnt in sorted(visible.items(), key=lambda x: -x[1])[:25]:
    mapping = dbrs_to_ls.get(key, "")
    p(f"| {key} | {cnt} | {mapping} |")

p()
p(f"**隐性属性** ({len(hidden)}个) - 用作状态标志位/分支记录:")
p()
p("| 隐性属性 | 出现次数 | 用途推测 |")
p("|----------|----------|----------|")
for key, cnt in sorted(hidden.items(), key=lambda x: -x[1])[:20]:
    clean = key.replace("=HIDDEN=", "").replace("=HIDEVAL=", "")
    p(f"| {clean} | {cnt} | (标志位) |")

p()

# --- 选项风险/死亡 ---
p("## 八、死亡/风险机制")
p()
death_opts = []
for evt in events:
    for opt in evt["options"]:
        result = opt.get("result", "")
        title = opt.get("title", "")
        text = (result + " " + title).lower()
        if any(kw in text for kw in ["死亡", "去世", "牺牲", "死了", "死了"]):
            death_opts.append((evt, opt))
        # 检查属性变化中是否设置健康<=0
        for ac in opt.get("attr_changes", []):
            if ac.get("key") == "健康" and ac.get("type") == "=" and ac.get("value", 100) <= 10:
                death_opts.append((evt, opt))

p(f"含死亡相关文本/效果的选项: {len(death_opts)}个")
p()

# --- dbrs事件迁移到人生模拟器的难点 ---
p("## 九、迁移到人生模拟器的关键问题")
p()
p("### 1. 属性映射")
p()
p("dbrs 有 21 个显性属性 + 77 个隐性属性，而人生模拟器只有 8 个属性。需要：")
p("- 将 dbrs 的扩展属性映射为**标签**（如「武力值高」「虔诚」等）")
p("- 将隐性属性全部转换为**标签**（如 `=HIDDEN=龙珠收集进度` -> `龙珠收集进度` 标签）")
p()
p("### 2. 年龄系统差异")
p()
p("- dbrs 使用 `age_min`/`age_max`，上限 65535 表示无限制")
p("- 人生模拟器使用 `age_range: [min, max]`")
p("- dbrs 有「超人」年龄组(111+)，游戏可延续数百岁（修仙/龙珠线）")
p("- 迁移方案：长寿命事件线需要放宽年龄上限")
p()
p("### 3. 事件链机制差异")
p()
p("- dbrs **没有显式的** `continue_event` 字段")
p("- 事件链通过**标签驱动**隐式实现：事件A添加标签X → 标签X触发事件B")
p("- 人生模拟器支持标签链 + `continue_event` 显式链，更灵活")
p()
p("### 4. 选项结果的条件分支")
p()
p("- dbrs 没有 `conditional_results`，所有分支通过**多个选项**实现")
p("- 每个选项可设置不同的 `add_tags`，由后续事件通过 `required_tags` 自然分流")
p()
p("### 5. 时间流逝")
p()
p("- dbrs 通过 `pass_time` 字段控制每次选择推进的年数 (1-4年)")
p("- 人生模拟器默认每年+1，需考虑是否支持跳跃多年")
p()

# --- 迁移优先级建议 ---
p("## 十、建议迁移优先级")
p()
p("按故事线独立性和复杂度排序：")
p()
p("| 优先级 | 故事线 | 事件数 | 理由 |")
p("|--------|--------|--------|------|")
p("| P0 | 出生/开局事件 | 34 | 游戏入口，必须优先 |")
p("| P1 | 学校/学生线 | ~30 | 普遍人生经历，标签简单 |")
p("| P1 | 恋爱/婚姻线 | ~20 | 通用情感线 |")
p("| P2 | 疾病/健康线 | ~20 | 通用健康系统 |")
p("| P2 | 警察/犯罪线 | ~15 | 职业线 |")
p("| P3 | 修仙/修真线 | ~20 | 特殊线路，属性多 |")
p("| P3 | 龙珠/赛亚人线 | ~10 | 特殊线路 |")
p("| P4 | 天网/科技线 | ~10 | 特殊线路 |")
p("| P4 | 其他小线 | ~20 | 可逐个追加 |")

with open(OUTPUT, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"报告已保存到: {OUTPUT}")
print(f"总行数: {len(lines)}")
