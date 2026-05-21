#!/usr/bin/env python3
"""
将 dbrs 事件 (doubi_events.json) 转换为人生模拟器事件格式 (.js)

转换规则:
- =NAME= → {user}
- 健康/财富/智力 → 对应 effects/set_attributes
- 其他 dbrs 属性 → 转为标签（全标签策略）
- 隐性属性 (=HIDDEN=/=HIDEVAL=) → 标签
- 检测死亡相关文本 → death_flag
- sex 限制 → required_tags 中添加"男性"/"女性"
- pass_time → 忽略
- 多选项事件 → 每个选项独立
"""
import json
import os
import re
from collections import defaultdict

BASE = os.path.dirname(os.path.abspath(__file__))
INPUT = os.path.join(BASE, "doubi_events.json")

# 人生模拟器的默认初始属性值
LS_DEFAULTS = {
    "health": 50, "money": 50, "social": 50, "intelligence": 50,
    "luck": 50, "mystery": 50, "san": 50, "temp": 0
}

# dbrs 属性 → 人生模拟器属性映射
ATTR_MAP = {
    "健康": "health",
    "财富": "money",
    "智力": "intelligence",
    "颜值": None,       # → 标签: "美貌" 等
    "武力值": None,     # → 标签
    "学习成绩": None,   # → 标签
    "大学时光": None,   # → 标签
    "恋爱中": None,     # → 标签
    "音乐能力": None,   # → 标签
    "音乐分": None,     # → 标签
    "画图能力": None,   # → 标签
    "同情分": None,     # → 标签
    "高考题目": None,   # → 标签
    "高考分数": None,   # → 标签
    "投资": None,       # → 标签
    "股票": None,       # → 标签
    "网红人气": None,   # → 标签
    "竹鼠数量": None,   # → 标签
    "千万富翁答对题目": None,  # → 标签
    "黑洞照片进度": None,     # → 标签
    "项目组经费": None,       # → 标签
    "考察队工作进度": None,   # → 标签
    "节目进度": None,         # → 标签
    "大师精灵球": None,       # → 标签
}

# 死亡相关关键词（用于自动检测 death_flag）
DEATH_KEYWORDS = ["死亡", "死了", "去世", "牺牲", "毙命", "猝死", "升天",
                  "离世", "断气", "永别", "没了命", "挂了", "完了",
                  "自杀", "自尽", "丧命", "绝命", "没命", "殒命"]

# 永生标签定义（在 tagRegistry 中注册）
IMMORTAL_TAGS = {
    "修仙": {"color": "purple", "fixed_attributes": {"health": 99}, "immortal": True},
    "鬼修": {"color": "purple", "fixed_attributes": {"health": 99}, "immortal": True},
    "修佛": {"color": "purple", "fixed_attributes": {"health": 99}, "immortal": True},
    "修魔": {"color": "purple", "fixed_attributes": {"health": 99}, "immortal": True},
    "赛亚人": {"color": "purple", "fixed_attributes": {"health": 95}, "immortal": True},
    "天神下凡": {"color": "purple", "fixed_attributes": {"health": 90, "luck": 90}, "immortal": True},
}

# 标签颜色定义（按 dbrs 标签语义）
TAG_COLORS = {
    # 红色标签——负面/不幸
    "孤儿": "red", "多病": "red", "贫穷": "red", "矮小": "red",
    "玻璃心": "red", "没屁眼": "red", "马赛克脸": "red",
    "肥胖": "red", "口臭": "red", "肝硬化": "red", "癌症": "red",
    "爱之病": "red", "失忆": "red", "精神分裂": "red",
    "尸体": "red",
    # 紫色标签——特殊能力/超自然
    "天神下凡": "purple", "修仙": "purple", "冰魔法": "purple",
    "会喷火": "purple", "隐身": "purple", "洞察": "purple",
    "长翅膀": "purple",
    # 金色标签——稀有/成就
    "富二代": "golden", "真玛丽苏": "golden",
    # 粉色标签——情感/关系
    "高情商": "pink", "爱笑": "pink", "体香": "pink",
    "美貌": "pink",
    # 黑色标签——轮回记忆
    # (暂不定义，后续根据需要添加)
}

# 空白开局事件ID——产出零标签的出生事件，自动加"平凡人"标签
BLANK_BIRTH_IDS = {5, 6, 264, 293, 413, 798, 913, 916, 965, 1073}

# dbrs 事件默认优先级（高于游戏自带事件的 0）
DEFAULT_DBRS_PRIORITY = 5

# 故事线锚点标签——高优先级(10)，确保关键剧情线优先触发
HIGH_PRIORITY_TAGS = {
    "孤儿", "富二代", "天神下凡", "真玛丽苏", "贫穷",
    "修仙", "鬼修", "修佛", "修魔", "赛亚人", "龙珠",
    "天网", "冰魔法", "会喷火", "隐身", "长翅膀",
}


def is_hidden(key):
    return "=HIDDEN=" in key or "=HIDEVAL=" in key


def clean_hidden_name(key):
    """从隐性属性名提取可读名称"""
    return key.replace("=HIDDEN=", "").replace("=HIDEVAL=", "").strip()


def has_death_text(text):
    """检查文本是否暗示死亡"""
    if not text:
        return False
    for kw in DEATH_KEYWORDS:
        if kw in text:
            return True
    return False


def convert_attr_changes(attr_changes, is_birth=False):
    """
    将 dbrs 的 attr_changes 转换为 effects, set_attributes, add_tags
    返回: (effects, set_attributes, add_tags_from_attrs, remove_tags_from_attrs)
    """
    effects = {}
    set_attrs = {}
    add_tags = []
    remove_tags = []

    for ac in attr_changes:
        key = ac.get("key", "")
        optype = ac.get("type", "=")
        value = ac.get("value", 0)

        # 隐性属性 → 标签
        if is_hidden(key):
            clean = clean_hidden_name(key)
            if optype == "=" and value == 0:
                # 设为0表示"不是/没有"这个状态
                pass  # 大多数情况下不需要添加标签
            elif optype == "=" and value == 1:
                add_tags.append(clean)
            elif optype == "+":
                if value >= 1:
                    add_tags.append(clean)
            continue

        # 显性属性 → 检查是否可映射
        mapped = ATTR_MAP.get(key, None)

        if mapped is None and key not in ATTR_MAP:
            # 未知属性 → 转为标签
            if optype == "=" and value > 0:
                add_tags.append(f"{key}")
            elif optype == "+" and value > 0:
                add_tags.append(f"{key}")
            continue

        if mapped is None:
            # 明确标记为"转标签"的属性
            if optype == "=" and value > 0:
                add_tags.append(key)
            elif optype == "+" and value > 0:
                add_tags.append(key)
            continue

        # 可映射到核心属性
        if optype == "=":
            if is_birth:
                # 开局事件：已知初始值，转为 effects 增量
                default = LS_DEFAULTS.get(mapped, 50)
                delta = value - default
                if delta != 0:
                    effects[mapped] = delta
            else:
                # 非开局事件：使用 set_attributes
                set_attrs[mapped] = value
        elif optype == "+":
            effects[mapped] = (effects.get(mapped, 0) + value)
        elif optype == "-":
            effects[mapped] = (effects.get(mapped, 0) - value)
        # 忽略其他类型 (x, =>, ?, etc.)

    return effects, set_attrs, add_tags, remove_tags


def detect_death_flag(option, event_description=""):
    """检测选项是否导致死亡
    三种检测方式:
    1. 选项文本含死亡关键词
    2. 事件描述含死亡关键词
    3. 选项添加"死亡"标签
    4. 选项将健康值设为 <=0
    """
    result = option.get("result", "")
    title = option.get("title", "")
    add_tags = option.get("add_tags", [])
    text = result + title + event_description

    # 方式1+2: 文本关键词
    if has_death_text(text):
        return True, result if has_death_text(result) else (title if has_death_text(title) else event_description[:30])

    # 方式3: 添加"死亡"标签
    if "死亡" in add_tags:
        return True, "不幸离世"

    # 方式4: 健康值设为 <=0
    for ac in option.get("attr_changes", []):
        if ac.get("key") == "健康" and ac.get("type") == "=" and ac.get("value", 100) <= 0:
            return True, f"健康值耗尽"

    return False, None


def get_tag_color(tag_name):
    """获取标签的推荐颜色"""
    return TAG_COLORS.get(tag_name, None)


def escape_js_string(s):
    """转义 JS 字符串"""
    if not s:
        return ""
    s = s.replace("\\", "\\\\")
    s = s.replace("'", "\\'")
    s = s.replace("\n", "\\n")
    s = s.replace("\r", "")
    return s


def format_js_object(obj, indent=12):
    """格式化 JS 对象字面量"""
    if not obj:
        return "{}"
    items = []
    for k, v in obj.items():
        if isinstance(v, str):
            items.append(f"{k}: '{escape_js_string(v)}'")
        elif isinstance(v, bool):
            items.append(f"{k}: {str(v).lower()}")
        else:
            items.append(f"{k}: {v}")
    return "{ " + ", ".join(items) + " }"


def format_trigger_conditions(cond, is_birth=False):
    """格式化 trigger_conditions"""
    parts = []
    age_min = cond.get("age_min", 0)
    age_max = cond.get("age_max", 0)

    # 年龄范围
    if age_min == 0 and age_max == 0:
        parts.append(f"age_range: [0, 0]")
    elif age_max >= 65535:
        parts.append(f"age_range: [{age_min}, 120]")  # 长寿命事件放宽到120
    else:
        parts.append(f"age_range: [{age_min}, {age_max}]")

    # required_tags (合并 JSON 中的 required_tags 和性别标签)
    req_tags = list(cond.get("required_tags", []))
    sex = cond.get("sex", -1)
    if sex == 0:
        req_tags.append("男性")
    elif sex == 1:
        req_tags.append("女性")

    if req_tags:
        formatted = ", ".join([f"'{t}'" for t in req_tags])
        parts.append(f"required_tags: [{formatted}]")

    return "{ " + ", ".join(parts) + " }"


def convert_option(opt, is_birth=False, evt_id=None, event_desc=""):
    """转换单个选项"""
    text = opt.get("text", "继续")
    result_text = opt.get("result", "")
    if result_text == "=INHERIT=":
        result_text = ""

    # 替换占位符
    text = text.replace("=NAME=", "{user}").replace("=AGE=", "{age}")
    result_text = result_text.replace("=NAME=", "{user}").replace("=AGE=", "{age}")

    # 处理标签
    add_tags = [t for t in opt.get("add_tags", []) if t]
    remove_tags = [t for t in opt.get("remove_tags", []) if t]

    # 空白开局事件：无标签产出时自动添加"平凡人"标签
    if is_birth and evt_id in BLANK_BIRTH_IDS:
        has_output_tag = any(t for t in add_tags if t != "未出生")
        if not has_output_tag and "平凡人" not in add_tags:
            add_tags.append("平凡人")

    # 处理属性变化
    effects, set_attrs, attr_add_tags, attr_remove_tags = convert_attr_changes(
        opt.get("attr_changes", []), is_birth
    )
    add_tags.extend(attr_add_tags)
    remove_tags.extend(attr_remove_tags)

    # 检测死亡（传入事件描述辅助检测）
    is_death, death_reason = detect_death_flag(opt, event_desc)

    # 构建选项
    opt_parts = []
    opt_parts.append(f"            text: '{escape_js_string(text)}'")

    if result_text:
        opt_parts.append(f"            result: '{escape_js_string(result_text)}'")
    else:
        opt_parts.append(f"            result: '你做出了选择。'")

    if effects:
        opt_parts.append(f"            effects: {format_js_object(effects)}")

    if set_attrs:
        opt_parts.append(f"            set_attributes: {format_js_object(set_attrs)}")

    if add_tags:
        formatted = ", ".join([f"'{t}'" for t in add_tags])
        opt_parts.append(f"            add_tags: [{formatted}]")

    if remove_tags:
        formatted = ", ".join([f"'{t}'" for t in remove_tags])
        opt_parts.append(f"            remove_tags: [{formatted}]")

    if is_death:
        opt_parts.append(f"            death_flag: true")
        if death_reason:
            opt_parts.append(f"            death_reason: '{escape_js_string(death_reason)}'")

    return "        {\n" + ",\n".join(opt_parts) + "\n        }"


def convert_event(evt, is_birth=False):
    """转换单个事件"""
    evt_id = evt["id"]
    title = evt["title"]
    desc = evt.get("text", "").replace("=NAME=", "{user}").replace("=AGE=", "{age}").strip()

    # 确定优先级：高优先级标签 → 10，其他 → 5
    priority = DEFAULT_DBRS_PRIORITY
    for tag in evt["conditions"].get("required_tags", []):
        if tag in HIGH_PRIORITY_TAGS:
            priority = 10
            break

    # 构建事件
    lines = []
    lines.append(f"        'dbrs_{evt_id}': {{")
    lines.append(f"            title: '{escape_js_string(title)}',")

    if desc:
        lines.append(f"            description: '{escape_js_string(desc)}',")

    lines.append(f"            priority: {priority},")

    # 触发条件
    trig = format_trigger_conditions(evt["conditions"], is_birth)
    lines.append(f"            trigger_conditions: {trig},")

    # 选项
    options = evt.get("options", [])
    evt_desc = evt.get("text", "").replace("=NAME=", "{user}").replace("=AGE=", "{age}")
    if len(options) == 1:
        lines.append(f"            options: [")
        lines.append(convert_option(options[0], is_birth, evt_id, evt_desc))
        lines.append(f"            ]")
    else:
        lines.append(f"            options: [")
        for i, opt in enumerate(options):
            opt_str = convert_option(opt, is_birth, evt_id, evt_desc)
            if i < len(options) - 1:
                opt_str += ","
            lines.append(opt_str)
        lines.append(f"            ]")

    lines.append(f"        }}")
    return "\n".join(lines)


def generate_tag_registrations(tags_used):
    """生成标签注册代码"""
    lines = []
    lines.append("// 本文件涉及的标签注册")
    lines.append("registerTags({")

    registered = set()
    for tag in sorted(tags_used):
        if tag in registered:
            continue
        registered.add(tag)

        color = get_tag_color(tag)
        immortal_def = IMMORTAL_TAGS.get(tag)

        if immortal_def:
            fa = immortal_def["fixed_attributes"]
            fa_str = "{ " + ", ".join([f"{k}: {v}" for k, v in fa.items()]) + " }"
            lines.append(f"    '{tag}': {{ color: '{immortal_def['color']}', fixed_attributes: {fa_str}, immortal: true }},")
        elif color:
            lines.append(f"    '{tag}': {{ color: '{color}' }},")

    lines.append("});")
    return "\n".join(lines)


def generate_event_file(events, file_label, tags_group_key, output_path):
    """生成一个事件 JS 文件"""
    lines = []
    lines.append("// dbrs 事件文件 - 自动生成")
    lines.append(f"// 来源: 豆比人生 - {file_label}")
    lines.append(f"// 事件数: {len(events)}")
    lines.append("import { registerTags } from '../../data/tagRegistry.js';")
    lines.append("")

    # 统计使用的标签
    all_tags = set()
    for evt in events:
        for opt in evt.get("options", []):
            for t in opt.get("add_tags", []):
                if t:
                    all_tags.add(t)
            for t in opt.get("remove_tags", []):
                if t:
                    all_tags.add(t)

    # 注册标签
    lines.append(generate_tag_registrations(all_tags))
    lines.append("")

    # 按触发标签分组
    grouped = defaultdict(list)
    for evt in events:
        req_tags = evt["conditions"].get("required_tags", [])
        if req_tags:
            for tag in req_tags:
                grouped[tag].append(evt)
        else:
            grouped["_no_trigger"].append(evt)

    # 导出事件对象
    lines.append(f"export const dbrs{tags_group_key}Events = {{")

    for tag in sorted(grouped.keys()):
        evts = grouped[tag]
        if tag == "_no_trigger":
            continue  # 跳过无触发标签的事件

        lines.append(f"    '{tag}': {{")
        lines.append(f"        events: {{")
        for i, evt in enumerate(evts):
            is_birth = (tag == "未出生")
            evt_code = convert_event(evt, is_birth)
            if i < len(evts) - 1:
                evt_code += ","
            lines.append(evt_code)
        lines.append(f"        }}")
        lines.append(f"    }},")

    lines.append(f"}};")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"  已生成: {output_path} ({len(events)} 个事件)")


def main():
    with open(INPUT, "r", encoding="utf-8") as f:
        all_events = json.load(f)

    print(f"总事件数: {len(all_events)}")

    # 故事线定义: (文件名后缀, 显示名, 触发标签关键词)
    storylines = [
        ("Birth", "出生/开局", ["未出生"]),
        ("School", "学校/教育", [
            "学生", "上学", "大学生", "小学生", "学校", "课堂", "考试",
            "高考", "老师", "学习", "教育", "大学", "毕业", "学历",
            "医学专业", "自学", "博士", "硕士", "学位", "医学生",
            "法学生", "留学", "考研", "论文", "实习"
        ]),
        ("Love", "恋爱/婚姻", [
            "恋爱", "结婚", "已婚", "单身", "暗恋", "初恋", "情侣", "夫妻",
            "恋人", "亲嘴", "初吻", "求婚", "同居", "分手", "征婚", "相亲",
            "真爱", "出轨", "离婚", "再婚"
        ]),
        ("Health", "健康/疾病", [
            "多病", "癌症", "心脏病", "白血病", "骨折", "残疾",
            "肝硬化", "脂肪肝", "乳癌", "黑肺", "烟瘾", "爱之病",
            "尿毒症", "风湿", "精神分裂", "近视眼", "肥胖",
            "口腔排便", "呼吸困难", "糖尿病", "痔疮", "哮喘",
            "过敏", "艾滋", "慢性病", "急性病",
            "呼吸道疾病", "肺部", "肝"
        ]),
        ("Tech", "科技/天网", [
            "天网", "机器人", "人工智能", "仿生人", "网络模块",
            "计算机", "编程", "黑客", "AI", "程序", "代码"
        ]),
        ("XiuXian", "修仙/异能", [
            "修仙", "修真", "鬼修", "化神", "筑基", "金丹", "元婴",
            "冥修", "修佛", "修魔", "赛亚人", "龙珠", "卡卡罗特",
            "冰魔法", "会喷火", "隐身", "天神下凡", "长翅膀",
            "魔法", "哈利波特", "霍格沃茨", "狩魔猎人", "炼金"
        ]),
        ("Crime", "犯罪/执法", [
            "小偷", "黑帮", "罪犯", "警察", "监狱", "坐牢", "犯罪",
            "杀人", "盗窃", "诈骗", "贪污", "逮捕", "审判", "枪毙",
            "派出所", "协警", "侦探", "法医"
        ]),
        ("Career", "工作/职业", [
            "工作", "职业", "医生", "教师", "工程师", "律师",
            "军人", "厨师", "歌手", "演员", "画家", "作家",
            "科学家", "网红", "主播", "运动员", "记者", "编辑",
            "消防员", "飞行员", "宇航员", "农民", "渔夫",
            "公务员", "村长", "市长", "省委书记", "总统",
            "AB站阿婆主", "AB站会员", "up主", "创业", "经商",
            "企业", "老板", "个体户", "自由职业"
        ]),
        ("Wealth", "财富/经济", [
            "富二代", "贫穷", "土豪", "贫困", "投资", "股票",
            "RMB玩家", "富有", "彩票", "中奖", "借贷", "高利贷",
            "破产", "理财", "银行", "千万富翁"
        ]),
        ("Music", "音乐/舞蹈", [
            "音乐", "唱歌", "乐器", "舞蹈", "三味弦", "架子鼓",
            "钢琴", "吉他", "MC石头", "轻音部", "宅舞", "尬舞",
            "广场舞", "芭蕾舞", "街舞", "说唱", "DJ", "作曲",
            "吹口哨", "口哨手", "演唱", "音乐会"
        ]),
        ("Art", "美术/设计", [
            "画画", "画图", "设计", "艺术", "摄影", "雕塑",
            "书法", "文学", "写作", "小说", "诗人", "诗歌"
        ]),
        ("Sports", "运动/健身", [
            "运动", "健身", "强壮", "肉改部", "篮球", "足球",
            "拳击", "跑步", "游泳", "登山", "攀岩", "滑雪",
            "冲浪", "极限运动", "翼装飞行", "好胜",
            "运动员", "教练", "比赛", "冠军", "奥运会"
        ]),
        ("Personality", "性格/特质", [
            "高情商", "洞察", "勇敢", "爱笑", "逻辑", "耐性",
            "中二病", "自信", "自恋", "耐心", "玻璃心",
            "口臭", "没屁眼", "黝黑", "矮小", "秃头",
            "体香", "美貌", "杂种", "JB脸", "大头",
            "失忆", "菊花残", "狗日", "被狗",
            "乐观", "悲观", "幽默", "冷漠", "马赛克脸",
            "孤儿", "长翅膀", "交网友",
        ]),
        ("Gaming", "游戏/娱乐", [
            "电子海洛因", "游戏", "电竞", "英雄联盟", "王者荣耀",
            "CSGO", "直播", "娱乐", "赌博", "麻将", "扑克",
            "游戏陪玩", "爽文", "瘾"
        ]),
        ("Social", "社交/人际", [
            "交网友", "社交", "朋友圈", "人脉", "交友", "好友",
            "邻居", "室友", "社团", "学生会", "某宝", "冲动消费",
            "粉丝", "观众", "舆论"
        ]),
        ("Adventure", "冒险/奇遇", [
            "冒险", "奇遇", "探险", "考古", "寻宝", "宝藏",
            "外星", "UFO", "超自然", "灵异", "鬼", "僵尸",
            "末日", "废土", "丧尸", "穿越", "平行世界",
            "时空", "维度", "异世界"
        ]),
    ]

    # 分类事件
    categorized = {}  # storyline_key -> [events]
    for key, _, _ in storylines:
        categorized[key] = []

    other_events = []

    for evt in all_events:
        req_tags = evt["conditions"].get("required_tags", [])
        matched = False

        for key, _, keywords in storylines:
            for tag in req_tags:
                if any(kw in tag for kw in keywords):
                    categorized[key].append(evt)
                    matched = True
                    break
            if matched:
                break

        if not matched:
            other_events.append(evt)

    print(f"\n故事线分布:")
    total_categorized = 0
    for key, name in [(k, n) for k, n, _ in storylines]:
        count = len(categorized[key])
        total_categorized += count
        if count > 0:
            print(f"  {name}: {count}")
    print(f"  其他(暂不导入): {len(other_events)}")

    # 输出目录
    out_dir = os.path.join(BASE, "..", "js", "events", "dbrs")
    os.makedirs(out_dir, exist_ok=True)

    # 生成文件
    print("\n生成事件文件:")
    for key, name, _ in storylines:
        count = len(categorized[key])
        if count > 0:
            generate_event_file(categorized[key], name, key,
                               os.path.join(out_dir, f"dbrs{key}Events.js"))

    # 生成汇总导入文件
    generate_index_file([k for k, _, _ in storylines if len(categorized[k]) > 0], out_dir)

    print("\n完成!")


def generate_index_file(keys, out_dir):
    """生成 dbrs 事件的 index.js，汇总导入所有故事线"""
    lines = []
    lines.append("// dbrs 事件汇总——自动生成")
    lines.append("// 导入所有故事线事件文件")
    lines.append("")

    import_names = []
    for key in keys:
        var = f"dbrs{key}Events"
        lines.append(f"import {{ {var} }} from './{var}.js';")
        import_names.append(var)

    # 平凡人通用事件（由 extract_common.py 生成）
    lines.append("import { dbrsCommonEvents } from './dbrsCommonEvents.js';")

    lines.append("")
    lines.append("/**")
    lines.append(" * 将所有 dbrs 故事线事件注册到 EventManager")
    lines.append(" * @param {EventManager} eventManager")
    lines.append(" */")
    lines.append("export function registerAllDbrsEvents(eventManager) {")

    for var in import_names:
        lines.append(f"    eventManager.registerDbrsEvents({var});")
    lines.append("    eventManager.registerDbrsEvents(dbrsCommonEvents);")

    lines.append("}")

    with open(os.path.join(out_dir, "index.js"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"  已生成: index.js (汇总 {len(keys)} 个故事线 + dbrsCommonEvents)")


if __name__ == "__main__":
    main()
