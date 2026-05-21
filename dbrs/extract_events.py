#!/usr/bin/env python3
"""从豆比人生 APK 中提取事件数据到 JSON 和 Markdown 文件。"""
import json
import os

BASE = os.path.dirname(os.path.abspath(__file__))
INPUT = os.path.join(BASE, "extracted", "assets", "res", "import", "58", "587f8178-608e-4570-abfc-d9b742bfb604.json")
OUT_JSON = os.path.join(BASE, "doubi_events.json")
OUT_MD = os.path.join(BASE, "doubi_events.md")

# 加载主 JSON
with open(INPUT, "r", encoding="utf-8") as f:
    raw = json.load(f)

data = raw["json"]
events_raw = data.get("evts", [])
print(f"总事件数: {len(events_raw)}")

# 解析每个事件的 aff（内部 JSON 字符串）
parsed = []
for evt in events_raw:
    aff_str = evt.get("aff", "[]")
    try:
        aff = json.loads(aff_str)
    except (json.JSONDecodeError, TypeError):
        aff = []

    parsed.append({
        "id": evt.get("id"),
        "title": evt.get("title", ""),
        "text": evt.get("text", ""),
        "conditions": {
            "required_tags": json.loads(evt.get("affCond", "[]")),
            "sex": evt.get("sexCond", -1),  # -1=任意, 0=男, 1=女
            "age_min": evt.get("ageCondMin", 0),
            "age_max": evt.get("ageCondMax", 0),
            "pass_time": evt.get("passTime", 1),
        },
        "options": [
            {
                "text": opt.get("btn", ""),
                "result": opt.get("text", ""),
                "title": opt.get("title", ""),
                "add_tags": [opt.get("plusAff", "")] if opt.get("plusAff") else [],
                "remove_tags": [opt.get("delAff", "")] if opt.get("delAff") else [],
                "add_bg": opt.get("plusBG", ""),
                "attr_changes": opt.get("affValueChange", [])
            }
            for opt in aff
        ]
    })

# 保存 JSON
with open(OUT_JSON, "w", encoding="utf-8") as f:
    json.dump(parsed, f, ensure_ascii=False, indent=2)
print(f"JSON 已保存: {OUT_JSON} ({len(parsed)} 个事件)")

# 保存 Markdown
with open(OUT_MD, "w", encoding="utf-8") as f:
    f.write("# 豆比人生 - 事件数据\n\n")
    f.write(f"共 {len(parsed)} 个事件\n\n")
    f.write("---\n\n")

    for evt in parsed:
        cond = evt["conditions"]
        sex_map = {-1: "任意", 0: "男", 1: "女"}
        sex_label = sex_map.get(cond["sex"], "任意")
        tags = ", ".join(cond["required_tags"]) if cond["required_tags"] else "无"
        age_range = f"{cond['age_min']}~{cond['age_max']}岁"

        f.write(f"## {evt['title']} (ID: {evt['id']})\n\n")
        f.write(f"- **触发条件**: 标签 [{tags}] | 性别 {sex_label} | 年龄 {age_range}\n")
        f.write(f"- **描述**: {evt['text']}\n\n")

        for i, opt in enumerate(evt["options"], 1):
            f.write(f"### 选项 {i}: {opt['text']}\n\n")
            if opt["title"] and opt["title"] != "=INHERIT=":
                f.write(f"- 标题: {opt['title']}\n")
            if opt["result"] and opt["result"] != "=INHERIT=":
                f.write(f"- 结果: {opt['result']}\n")
            if opt["add_tags"] and opt["add_tags"][0]:
                f.write(f"- 添加标签: {', '.join(opt['add_tags'])}\n")
            if opt["remove_tags"] and opt["remove_tags"][0]:
                f.write(f"- 移除标签: {', '.join(opt['remove_tags'])}\n")
            if opt["add_bg"]:
                f.write(f"- 添加背景: {opt['add_bg']}\n")
            if opt["attr_changes"]:
                f.write("- 属性变化:\n")
                for ac in opt["attr_changes"]:
                    f.write(f"  - {ac.get('key', '?')}: {ac.get('type', '=')} {ac.get('value', 0)}\n")
            f.write("\n")

        f.write("---\n\n")

print(f"Markdown 已保存: {OUT_MD}")
