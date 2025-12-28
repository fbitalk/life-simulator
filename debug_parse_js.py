
import re
import json
import os
from pathlib import Path

def read_file_with_encoding(filepath):
    encodings = ['utf-8-sig', 'utf-16', 'utf-16-le', 'utf-8', 'gbk', 'gb2312']
    for encoding in encodings:
        try:
            with open(filepath, 'r', encoding=encoding) as f:
                content = f.read()
                if 'const' in content or 'var' in content or 'let' in content:
                    return content, encoding
        except:
            continue
    return None, None

def parse_js_to_dict(js_content: str) -> dict:
    match = re.search(r'const\s+\w+\s*=\s*(\{[\s\S]*\})\s*;', js_content, re.MULTILINE)
    if not match:
        match = re.search(r'const\s+\w+\s*=\s*(\{[\s\S]*\})', js_content, re.MULTILINE)
    
    if not match:
        return None
    
    obj_str = match.group(1)
    
    lines = obj_str.split('\n')
    cleaned_lines = []
    for line in lines:
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
                    break
                else:
                    result.append(char)
            i += 1
        cleaned_lines.append(''.join(result))
    
    obj_str = '\n'.join(cleaned_lines)
    obj_str = re.sub(r',(\s*[}\]])', r'\1', obj_str)
    obj_str = re.sub(r'(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', obj_str)
    obj_str = obj_str.replace('Infinity', '999999999')
    obj_str = re.sub(r':\s*\+(\d)', r': \1', obj_str)
    
    try:
        return json.loads(obj_str)
    except json.JSONDecodeError as e:
        filename = getattr(parse_js_to_dict, 'current_file', 'unknown')
        print(f"Error in {filename}: {e}")
        return None

events_dir = r"e:\Products\Game\life-simulator-1226\js\events"
for filename in os.listdir(events_dir):
    if filename.endswith(".js"):
        filepath = os.path.join(events_dir, filename)
        content, enc = read_file_with_encoding(filepath)
        if not content:
            print(f"COULD NOT READ: {filename}")
            continue
        
        parse_js_to_dict.current_file = filename
        data = parse_js_to_dict(content)
        if data is not None:
            print(f"OK: {filename} ({len(data)} tags) - {enc}")
        else:
            print(f"FAILED: {filename}")
