"""分析出生事件的后继覆盖情况"""
import json, os
from collections import defaultdict

BASE = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(BASE, "doubi_events.json"), "r", encoding="utf-8") as f:
    events = json.load(f)

# 出生事件
birth_events = [e for e in events if "未出生" in e["conditions"].get("required_tags", [])]

# 构建 tag -> events 索引
tag_triggered = defaultdict(list)
for e in events:
    for t in e["conditions"].get("required_tags", []):
        tag_triggered[t].append(e)

print("=== 出生事件分析 ===\n")
print(f"{'ID':<5} {'标题':<12} {'产出标签':<25} {'该标签有后续事件?':<20} {'年龄':<8} {'pass_time'}")
print("-" * 100)

blank_births = []
tagged_births = []

for evt in birth_events:
    eid = evt["id"]
    title = evt.get("title", "")
    age = f"{evt['conditions']['age_min']}-{evt['conditions']['age_max']}"
    pt = evt["conditions"]["pass_time"]

    all_add_tags = set()
    for opt in evt.get("options", []):
        for t in opt.get("add_tags", []):
            if t and t != "未出生":
                all_add_tags.add(t)

    if not all_add_tags:
        blank_births.append(evt)
        follow_up = "无标签产出 → 空白开局"
    else:
        tagged_births.append(evt)
        follow_parts = []
        for tag in sorted(all_add_tags):
            follow_count = len(tag_triggered.get(tag, []))
            if follow_count > 0:
                follow_parts.append(f"{tag}({follow_count}事件)")
            else:
                follow_parts.append(f"{tag}(无后续!)")
        follow_up = ", ".join(follow_parts)

    tags_str = ", ".join(sorted(all_add_tags)) if all_add_tags else "(无)"
    print(f"{eid:<5} {title:<12} {tags_str:<25} {follow_up:<40} {age:<8} {pt}")

print(f"\n=== 统计 ===")
print(f"有标签产出: {len(tagged_births)} 个")
print(f"空白开局(无标签): {len(blank_births)} 个")

print(f"\n空白开局事件:")
for evt in blank_births:
    print(f"  ID:{evt['id']} [{evt['title']}] age={evt['conditions']['age_min']}-{evt['conditions']['age_max']} pass_time={evt['conditions']['pass_time']}")

# 检查产出标签是否有被导入（通过关键词检查）
print(f"\n=== 出生标签的后续事件覆盖检查 ===")
imported_keywords = {
    "学校": ["学生", "上学", "课堂", "考试", "学校", "学习", "教育"],
    "健康": ["多病", "癌症", "肝硬化", "烟瘾", "乳癌"],
    "性格": ["高情商", "洞察", "勇敢", "爱笑", "玻璃心", "没屁眼", "黝黑", "矮小", "秃头", "体香", "美貌", "杂种", "大头", "口臭", "JB脸", "自恋"],
    "运动": ["强壮", "肉改部", "运动", "健身"],
    "财富": ["富二代", "贫穷", "土豪"],
    "社交": ["交网友"],
    "音乐": ["音乐", "唱歌", "舞蹈"],
    "游戏": ["电子海洛因", "游戏"],
    "艺术": ["画画", "设计", "写作"],
    "修仙": ["修仙", "魔法", "冰魔法", "会喷火", "隐身", "天神下凡", "长翅膀"],
}

for evt in tagged_births:
    for opt in evt.get("options", []):
        for tag in opt.get("add_tags", []):
            if not tag or tag == "未出生":
                continue
            # Check if tag matches any keyword
            matched = False
            for category, keywords in imported_keywords.items():
                if any(kw in tag for kw in keywords):
                    matched = True
                    break

            follow_count = len(tag_triggered.get(tag, []))
            if not matched:
                print(f"  ⚠ 标签 [{tag}] (ID:{evt['id']} {evt['title']}) — 未被任何分类覆盖! 有{follow_count}个后续事件")
