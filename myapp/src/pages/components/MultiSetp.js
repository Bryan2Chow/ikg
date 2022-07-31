import React, { Component } from 'react';
import { Button, Card, Input, Select } from 'antd';
import { ConstructGraph } from './ConstructGraph';
import { nanoid } from 'nanoid';
const { Search } = Input;
const { Option } = Select;
let HeadList = [];
let TotalLinks = [];
let TailList = []
export default class MultiSetp extends Component {
    state = {
        MultiSetpNumber: [1, 2, 3, 4, 5],
        SelectedRelation: 1,
        data: {
            nodes: [
                { "id": "工件", "label": '工件', "name": '工件', "group": 1 },
                { "id": "航天薄壁件", "label": '航天薄壁件', "name": '航天薄壁件', "group": 2 },
                { "id": "主结构框架", "label": '主结构框架', "name": '主结构框架', "group": 2 },
                { "id": "控制仓壳体", "label": '控制仓壳体', "name": '控制仓壳体', "group": 3 },
                { "id": "海基舵面", "label": '海基舵面', "name": '海基舵面', "group": 2 },
                { "id": "燃气舵仓壳体", "label": '燃气舵仓壳体', "name": '燃气舵仓壳体', "group": 2 },
                { "id": "底座安装环", "label": '底座安装环', "name": '底座安装环', "group": 2 },
                { "id": "舵机仓壳体", "label": '舵机仓壳体', "name": '舵机仓壳体', "group": 3 },
                { "id": "运载桁条接头", "label": '运载桁条接头', "name": '运载桁条接头', "group": 2 },
                { "id": "无线接头", "label": '无线接头', "name": '无线接头', "group": 4 },
                { "id": "空气舵", "label": '空气舵', "name": '空气舵', "group": 5 },
                { "id": "制导飞控舱壳体", "label": '制导飞控舱壳体', "name": '制导飞控舱壳体', "group": 6 },
                { "id": "旋压设备", "label": '旋压设备', "name": '旋压设备', "group": 2 },
                { "id": "旋压机床", "label": '旋压机床', "name": '旋压机床', "group": 2 },
                { "id": "加工中心", "label": '加工中心', "name": '加工中心', "group": 2 },
                { "id": "加工设备", "label": '加工设备', "name": '加工设备', "group": 3 },
                { "id": "立式铣床", "label": '立式铣床', "name": '立式铣床', "group": 4 },
                { "id": "数控车床", "label": '数控车床', "name": '数控车床', "group": 5 },
                { "id": "铣床", "label": '铣床', "name": '铣床', "group": 6 },
                { "id": "加工缺陷", "label": '加工缺陷', "name": '加工缺陷', "group": 2 },
                { "id": "旋压加工", "label": '旋压加工', "name": '旋压加工', "group": 4 },
                { "id": "旋压机床状态", "label": '旋压机床状态', "name": '旋压机床状态 ', "group": 4 },
                { "id": "旋压工装状态", "label": '旋压工装状态', "name": '旋压工装状态', "group": 6 },
                { "id": "润滑状态", "label": '润滑状态', "name": '润滑状态', "group": 2 },
                { "id": "工艺参数", "label": '工艺参数', "name": '工艺参数', "group": 5 },
                { "id": "最大推力", "label": '最大推力', "name": '最大推力', "group": 2 },
                { "id": "旋轮径向力", "label": '旋轮径向力', "name": '旋轮径向力', "group": 2 },
                { "id": "机床轴向力", "label": '机床轴向力', "name": '机床轴向力', "group": 2 },
                { "id": "机床功率", "label": '机床功率', "name": '机床功率', "group": 2 },
                { "id": "主轴扭矩", "label": '主轴扭矩', "name": '主轴扭矩', "group": 2 },
                { "id": "设备震动", "label": '设备震动', "name": '设备震动', "group": 4 },
                { "id": "芯模跳动", "label": '芯模跳动', "name": '芯模跳动', "group": 5 },
                { "id": "旋轮工作角", "label": '旋轮工作角', "name": '旋轮工作角', "group": 3 },
                { "id": "工作圆弧", "label": '工作圆弧', "name": '工作圆弧', "group": 2 },
                { "id": "安装进度", "label": '安装进度', "name": '安装进度', "group": 4 },
                { "id": "加工中心状态", "label": '加工中心状态', "name": '加工中心状态', "group": 2 },
                { "id": "立式铣床状态", "label": '立式铣床状态', "name": '立式铣床状态', "group": 6 },
                { "id": "数控车床状态", "label": '数控车床状态', "name": '数控车床状态', "group": 2 },
                { "id": "铣床状态", "label": '铣床状态', "name": '铣床状态', "group": 2 },
                { "id": "加工中心工装状态", "label": '加工中心工装状态', "name": '加工中心工装状态', "group": 4 },
                { "id": "立式铣床工装状态", "label": '立式铣床工装状态', "name": '立式铣床工装状态', "group": 4 },
                { "id": "数控车床工装状态", "label": '数控车床工装状态', "name": '数控车床工装状态', "group": 4 },
                { "id": "铣床工装状态", "label": '铣床工装状态', "name": '铣床工装状态', "group": 2 },
                { "id": "波纹状剥离", "label": '波纹状剥离', "name": '波纹状剥离', "group": 2 },
                { "id": "局部变形", "label": '局部变形', "name": '局部变形', "group": 6 },
                { "id": "旋轮压缩", "label": '旋轮压缩', "name": '旋轮压缩', "group": 6 },
                { "id": "鳞状剥离", "label": '鳞状剥离', "name": '鳞状剥离', "group": 6 },
                { "id": "皱折", "label": '皱折', "name": '皱折', "group": 2 },
                { "id": "内部龟裂", "label": '内部龟裂', "name": '内部龟裂', "group": 3 },
                { "id": "破裂", "label": '破裂', "name": '破裂', "group": 2 },
                { "id": "旋转状皱折", "label": '旋转状皱折', "name": '旋转状皱折', "group": 2 },
                { "id": "壁部皱折", "label": '壁部皱折', "name": '壁部皱折', "group": 5 },
                { "id": "端部皱折", "label": '端部皱折', "name": '端部皱折', "group": 5 },
                { "id": "内部龟裂", "label": '内部龟裂', "name": '内部龟裂', "group": 5 },
                { "id": "首次进给比比例过大", "label": '首次进给比比例过大', "name": '首次进给比比例过大', "group": 2 },
                { "id": "调小首次加工进给比", "label": '调小首次加工进给比', "name": '调小首次加工进给比', "group": 2 },
                { "id": "轴向破裂", "label": '轴向破裂', "name": '轴向破裂', "group": 3 },
                { "id": "周向破裂", "label": '周向破裂', "name": '周向破裂', "group": 3 },
                { "id": "人字形裂纹", "label": '人字形裂纹', "name": '人字形裂纹', "group": 2 },
                { "id": "壁厚减薄率过小", "label": '壁厚减薄率过小', "name": '壁厚减薄率过小', "group": 4 },
                { "id": "旋轮圆角半径过小", "label": '旋轮圆角半径过小', "name": '旋轮圆角半径过小', "group": 2 },
                { "id": "增大壁厚减薄率", "label": '增大壁厚减薄率', "name": '增大壁厚减薄率', "group": 2 },
                { "id": "增大旋轮圆角半径", "label": '增大旋轮圆角半径', "name": '增大旋轮圆角半径', "group": 2 },
                { "id": "端部裂纹", "label": '端部裂纹', "name": '端部裂纹', "group": 1 },
                { "id": "壁厚减薄率过大", "label": '壁厚减薄率过大', "name": '壁厚减薄率过大', "group": 2 },
                { "id": "硬化度大", "label": '硬化度大', "name": '硬化度大', "group": 2 },
                { "id": "调小加工进给比", "label": '调小加工进给比', "name": '调小加工进给比', "group": 4 },
                { "id": "减小壁厚减薄率", "label": '减小壁厚减薄率', "name": '减小壁厚减薄率', "group": 4 },
                { "id": "局部调质处理", "label": '局部调质处理', "name": '局部调质处理', "group": 2 },
                { "id": "进给比过大", "label": '进给比过大', "name": '进给比过大', "group": 2 },
                { "id": "旋轮成型角过大", "label": '旋轮成型角过大', "name": '旋轮成型角过大', "group": 2 },
                { "id": "壁厚减薄率过大", "label": '轴向破裂', "name": '轴向破裂', "group": 2 },
                { "id": "调小旋轮成型角", "label": '调小旋轮成型角', "name": '调小旋轮成型角', "group": 2 },
                { "id": "管胚端部有伤痕", "label": '管胚端部有伤痕', "name": '管胚端部有伤痕', "group": 2 },
                { "id": "处理管胚端部伤痕", "label": '处理管胚端部伤痕', "name": '处理管胚端部伤痕', "group": 2 },
                { "id": "局部调质处理", "label": '局部调质处理', "name": '局部调质处理', "group": 2 },
                { "id": "数控铣床", "label": '数控铣床', "name": '数控铣床', "group": 2 },


            ],
            links: [
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '航天薄壁件'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '主结构框架'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '控制仓壳体'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '海基舵面'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '燃气舵仓壳体'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '底座安装环'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '舵机仓壳体'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '运载桁条接头'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '无线接头'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '空气舵'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '工件',
                    "target": '制导飞控舱壳体'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '航天薄壁件',
                    "target": '旋压设备'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压设备',
                    "target": '旋压机床'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工中心',
                    "target": '加工设备'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '立式铣床',
                    "target": '加工设备'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '数控车床',
                    "target": '加工设备'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '铣床',
                    "target": '加工设备'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床',
                    "target": '加工设备'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '加工中心',
                    "target": '加工缺陷'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '立式铣床',
                    "target": '加工缺陷'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '数控车床',
                    "target": '加工缺陷'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '铣床',
                    "target": '加工缺陷'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '主结构框架',
                    "target": '加工中心'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '控制仓壳体',
                    "target": '加工中心'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '海基舵面',
                    "target": '数控铣床'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '燃气舵仓壳体',
                    "target": '立式铣床'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '运载桁条接头',
                    "target": '数控车床'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '无线接头',
                    "target": '数控车床'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '空气舵',
                    "target": '铣床'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '制导飞控舱壳体',
                    "target": '旋压机床'
                },
                {
                    "id": nanoid(),
                    "label": 'has_machining',
                    "source": '旋压机床',
                    "target": '旋压加工'
                },
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '旋压加工',
                    "target": '加工缺陷'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压加工',
                    "target": '旋压机床状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压加工',
                    "target": '旋压工装状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压加工',
                    "target": '润滑状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压加工',
                    "target": '工艺参数'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床状态',
                    "target": '最大推力'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床状态',
                    "target": '旋轮径向力'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床状态',
                    "target": '机床轴向力'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床状态',
                    "target": '机床功率'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床状态',
                    "target": '主轴扭矩'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压机床状态',
                    "target": '设备震动'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压工装状态',
                    "target": '芯模跳动'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压工装状态',
                    "target": '旋轮工作角'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压工装状态',
                    "target": '工作圆弧'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '旋压工装状态',
                    "target": '安装进度'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工中心',
                    "target": '加工中心状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '立式铣床',
                    "target": '立式铣床状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '数控车床',
                    "target": '数控车床状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '铣床',
                    "target": '铣床状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工中心',
                    "target": '加工中心工装状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '立式铣床',
                    "target": '立式铣床工装状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '数控车床',
                    "target": '数控车床工装状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '铣床',
                    "target": '铣床工装状态'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '波纹状剥离'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '局部变形'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '旋轮压缩'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '鳞状剥离'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '皱折'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '内部龟裂'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '加工缺陷',
                    "target": '破裂'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '皱折',
                    "target": '旋转状皱折'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '皱折',
                    "target": '壁部皱折'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '皱折',
                    "target": '端部皱折'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '内部龟裂',
                    "target": '首次进给比比例过大'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '内部龟裂',
                    "target": '调小首次加工进给比'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '破裂',
                    "target": '轴向破裂'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '破裂',
                    "target": '周向破裂'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '破裂',
                    "target": '人字形裂纹'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '人字形裂纹',
                    "target": '壁厚减薄率过小'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '人字形裂纹',
                    "target": '旋轮圆角半径过小'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '人字形裂纹',
                    "target": '增大壁厚减薄率'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '人字形裂纹',
                    "target": '增大旋轮圆角半径'
                },
                {
                    "id": nanoid(),
                    "label": 'contain',
                    "source": '破裂',
                    "target": '端部裂纹'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '轴向破裂',
                    "target": '壁厚减薄率过大'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '轴向破裂',
                    "target": '硬化度大'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '轴向破裂',
                    "target": '调小加工进给比'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '轴向破裂',
                    "target": '减小壁厚减薄率'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '轴向破裂',
                    "target": '局部调质处理'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '轴向破裂',
                    "target": '进给比过大'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '周向破裂',
                    "target": '旋轮成型角过大'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '周向破裂',
                    "target": '壁厚减薄率过大'
                },

                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '周向破裂',
                    "target": '调小加工进给比'
                },

                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '周向破裂',
                    "target": '调小旋轮成型角'
                },

                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '周向破裂',
                    "target": '减小壁厚减薄率'
                },

                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '周向破裂',
                    "target": '进给比过大'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '端部裂纹',
                    "target": '管胚端部有伤痕'
                },
                {
                    "id": nanoid(),
                    "label": 'cause',
                    "source": '端部裂纹',
                    "target": '硬化度大'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '端部裂纹',
                    "target": '处理管胚端部伤痕'
                },
                {
                    "id": nanoid(),
                    "label": 'measure',
                    "source": '端部裂纹',
                    "target": '局部调质处理'
                },







            ],
            width: 1000,
            height: 1000,
            colorList: ['#FD7623', '#3388B1', '#D82952', '#F3D737', '#409071', '#D64E52'],
        },
        // 将链存储在这里面
        MultiArrau: []

    };
    MultiSetpNumber = (e) => {
        this.setState({
            SelectedRelation: Number(e)
        })
    };
    SelectedEntity = (e) => {
        // console.log(e.target.value)
        HeadList.push(e.target.value)
    }
    QueryBasedMultistep = () => {

        const removechild = document.getElementsByClassName('svgs')
        let amounts = removechild.length
        const parentnodes = document.getElementsByClassName('container')
        for (var i = 0; i < amounts; i++) {
            parentnodes[0].removeChild(removechild[0])
        }

        for (i = 0; i < this.state.SelectedRelation; i++) {
            // 获取links
            let linksobj = this.state.data.links.filter((linkObj) => {
                return HeadList.includes(linkObj.source)
            })
            TailList = linksobj.map((obj) => {
                return obj.source
            })
            HeadList = HeadList.filter((e) => {
                return TailList.includes(e)
            })
            linksobj = this.state.data.links.filter((linkObj) => {
                return HeadList.includes(linkObj.source)
            })
            // 临时变量取空,headlist取空
            HeadList = []
            // 遍历links将target存放在headlist中
            HeadList = linksobj.map((obj) => {
                return obj.target
            })
            // 将获取到links保存在总的links中
            TotalLinks = TotalLinks.concat(linksobj)
            // 将临时存储取空
            linksobj = []
        }

        console.log(TotalLinks)
        const newNodess = this.state.data.nodes.filter((nodesobj) => {
            return TotalLinks.find((nelinksobj) => {
                return nelinksobj.source === nodesobj.name || nelinksobj.target === nodesobj.name
            })
        })
        console.log(newNodess)
        const GraphData = {
            links: TotalLinks,
            nodes: newNodess,
            width: 1000,
            height: 1000,
            colorList: ['#FD7623', '#3388B1', '#D82952', '#F3D737', '#409071', '#D64E52'],
        }
        ConstructGraph(GraphData)
        TotalLinks = []
    }
    render() {
        if (this.props.CheckInfor.Multi === true) {
            return (
                <div style={{ height: "100%" }}>
                    <h3 style={{ marginTop: 20 }}>| 追溯信息</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Input placeholder='请输入查询节点名称' style={{ width: "20%" }} onChange={this.SelectedEntity} />
                        <Select
                            style={{
                                width: 200,
                            }}
                            placeholder="选择跳数"
                            // value={this.state.SelectedRelation}
                            onChange={this.MultiSetpNumber}
                        >
                            {this.state.MultiSetpNumber.map((MultiSetpNumber) => (
                                <Option key={MultiSetpNumber}>{MultiSetpNumber}</Option>
                            ))}
                        </Select>

                        <Button type='primary' onClick={this.QueryBasedMultistep} >开始查询</Button>
                    </div>

                    <h3 style={{ marginTop: 20 }}>| 图追溯信息路径关系图谱</h3>
                    <Card className='container' style={{ height: "78%", overflow: 'hidden' }}></Card>
                </div>
            )
        } else {
            return (
                null
            )
        }

    }
}