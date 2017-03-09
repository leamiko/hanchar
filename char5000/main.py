#!/usr/bin/env python3
# _*_ encoding=utf-8 _*_
# 讀取初始文件，將之轉換成 json 數據

import json, re


with open('./5000.txt', 'r') as f:
    truelist = []
    for line in f.readlines():
        line = re.split(r'[\s]+', line)
        if len(line) == 3:
            line.insert(1, '')
            line.insert(2, '')
            line.insert(3, '')
        elif len(line) == 4:
            line.insert(1, '')
            line.insert(2, '')
        d = {}
        for index, ln in enumerate(line):
            if index == 0:
                ln = ln.replace('【', '')
                ln = ln.replace('】', '')
                d['name'] = ln
            if index == 1:
                d['head'] = ln
            if index == 2:
                d['foot'] = ln
            if index == 3:
                d['type'] = ln
            if index == 4:
                d['mean'] = ln
        truelist.append(d)
    f = open('./data.json', 'w')
    f.write(json.dumps(truelist, indent=2, sort_keys=True, ensure_ascii=False))
    f.close()
