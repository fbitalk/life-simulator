"""从无触发标签事件池中提取童年事件（1-20岁），生成平凡人事件文件"""
import json, os
from collections import defaultdict

BASE = os.path.dirname(os.path.abspath(__file__))
INPUT = os.path.join(BASE, "doubi_events.json")

with open(INPUT, "r", encoding="utf-8") as f:
    events = json.load(f)

# 筛选：无触发标签 + 年龄1-20岁范围 + 不限性别
childhood = []
for evt in events:
    cond = evt["conditions"]
    if cond.get("required_tags"):
        continue  # 跳過有触发标签的
    if cond.get("sex", -1) != -1:
        continue  # 跳過性别限制的
    age_min = cond.get("age_min", 0)
    age_max = cond.get("age_max", 0)
    # 年龄范围在1-20岁内
    if age_max > 60 or age_min > 20:
        continue
    if age_max <= 0:
        continue
    childhood.append(evt)

# 去重——按标题相似度
seen_titles = set()
unique = []
for evt in childhood:
    title = evt.get("title", "")
    if title not in seen_titles:
        seen_titles.add(title)
        unique.append(evt)

# 取前50个
selected = unique[:50]

print(f"符合条件的童年事件: {len(childhood)}")
print(f"去重后: {len(unique)}")
print(f"选取: {len(selected)}")

# 输出年龄分布
for evt in selected[:20]:
    cond = evt["conditions"]
    print(f"  ID:{evt['id']} [{evt['title']}] age={cond['age_min']}-{cond['age_max']}")

# 现在生成平凡人事件文件
out_dir = os.path.join(BASE, "..", "js", "events", "dbrs")
os.makedirs(out_dir, exist_ok=True)

lines = []
lines.append("// dbrs 事件文件 - 自动生成")
lines.append("// 平凡人——空白开局角色的通用童年事件")
lines.append(f"// 事件数: {len(selected)}")
lines.append("import { registerTags } from '../../data/tagRegistry.js';")
lines.append("")
lines.append("registerTags({")
lines.append("    '平凡人': { color: 'normal' },")
lines.append("});")
lines.append("")
lines.append("export const dbrsCommonEvents = {")
lines.append("    '平凡人': {")
lines.append("        events: {")

# 快速转换函数
def escape_js(s):
    if not s: return ""
    return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("\r", "")

for i, evt in enumerate(selected):
    eid = evt["id"]
    title = escape_js(evt.get("title", ""))
    desc = escape_js(evt.get("text", "").replace("=NAME=", "{user}").strip())
    cond = evt["conditions"]
    age_min = cond.get("age_min", 0)
    age_max = min(cond.get("age_max", 65535), 60)  # 限制到60

    lines.append(f"        'dbrs_common_{eid}': {{")
    lines.append(f"            title: '{title}',")
    if desc:
        lines.append(f"            description: '{desc}',")
    lines.append(f"            priority: 3,")
    lines.append(f"            trigger_conditions: {{ age_range: [{age_min}, {age_max}], required_tags: ['平凡人'] }},")
    lines.append(f"            options: [")

    for opt in evt.get("options", []):
        text = escape_js(opt.get("text", "继续").replace("=NAME=", "{user}"))
        result = escape_js(opt.get("result", "").replace("=NAME=", "{user}"))
        if result == "" or result == "=INHERIT=":
            result = "你做出了选择。"

        add_tags = [t for t in opt.get("add_tags", []) if t]
        remove_tags = [t for t in opt.get("remove_tags", []) if t]

        opt_parts = [f"                text: '{text}'", f"                result: '{result}'"]
        if add_tags:
            opt_parts.append(f"                add_tags: [{', '.join(repr(t) for t in add_tags)}]")
        if remove_tags:
            opt_parts.append(f"                remove_tags: [{', '.join(repr(t) for t in remove_tags)}]")

        # 属性变化
        effects = {}
        for ac in opt.get("attr_changes", []):
            key = ac.get("key", "")
            if "HIDDEN" in key or "HIDEVAL" in key:
                continue
            if key == "健康":
                mapped = "health"
            elif key == "财富":
                mapped = "money"
            else:
                continue
            optype = ac.get("type", "=")
            val = ac.get("value", 0)
            if optype == "+":
                effects[mapped] = val
            elif optype == "-":
                effects[mapped] = -val
        if effects:
            items = ", ".join(f"{k}: {v}" for k, v in effects.items())
            opt_parts.append(f"                effects: {{ {items} }}")

        lines.append("            {")
        lines.append(",\n".join(opt_parts))
        lines.append("            },")

    lines.append(f"            ]")
    lines.append(f"        }},")

lines.append("        }")
lines.append("    },")
lines.append("};")

with open(os.path.join(out_dir, "dbrsCommonEvents.js"), "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"\n已生成: dbrsCommonEvents.js ({len(selected)} 个童年事件)")
