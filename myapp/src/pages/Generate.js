const links = [{
    "id": 3,
    "label": "perform_a_weld",
    "source": "2021-06-16_10:07:19", "target": "焊接工件1"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "原材料"
},
{
    "id": 3,
    "label": "has",
    "source": "原材料", "target": "高温合金钢GH3628"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "焊缝数量"
},
{
    "id": 3,
    "label": "perform_a_weld",
    "source": "焊接工件1", "target": "焊接"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "焊缝正面余高"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "2021-06-16_10:07:19", "target": "真空度"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "2021-06-16_10:07:19", "target": "加速电压"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "2021-06-16_10:07:19", "target": "电子束流"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "2021-06-16_10:07:19", "target": "电子聚焦量"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "真空度", "target": "-891"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "加速电压", "target": "130"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "电子束流", "target": "0.165"
},
{
    "id": 3,
    "label": "execute_a_measurement",
    "source": "电子聚焦量", "target": "2034"
},
{
    "id": 3,
    "label": "make_an_image_detection",
    "source": "2021-06-16_10:22:19", "target": "表面缺陷"
},
{
    "id": 3,
    "label": "detect_a_feature",
    "source": "2021-06-16_10:22:19", "target": "气孔"
},
{
    "id": 3,
    "label": "make_an_image_detection",
    "source": "焊接图像", "target": "缺陷特征"
},
{
    "id": 3,
    "label": "detect_a_feature",
    "source": "焊接图像缺陷检测", "target": "气孔"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "真空度"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "工作距离"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "加速电压"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "电子束流"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "聚焦电流"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "焊接速度"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "激光功率"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "离焦量"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空电子束焊机", "target": "激光功率"
},
{
    "id": 3,
    "label": "contain",
    "source": "电子枪功率", "target": "15kW"
},
{
    "id": 3,
    "label": "contain",
    "source": "电子枪加速电压", "target": "60kW"
},
{
    "id": 3,
    "label": "contain",
    "source": "电子束最大束流", "target": "250mA"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空获得时间", "target": "15min"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空室真空度", "target": "0.05Pa"
},
{
    "id": 3,
    "label": "detect",
    "source": "焊接工件", "target": "阴极使用寿命模型"
},
{
    "id": 3,
    "label": "detect",
    "source": "旋压加工", "target": "旋压成型质量检测"
},
{
    "id": 3,
    "label": "perform_a_machining",
    "source": "真空电子束焊机", "target": "焊接工件1"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "产品批次号"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "焊接图号"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "原材料"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "壳体直径"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "壳体壁厚"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "壳体长度"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "壳体位置"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "焊缝要求"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "产品批次号"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "焊接图号"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "原材料"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "壳体直径"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "壳体壁厚"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "壳体长度"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "焊缝数量"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "壳体位置"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "焊缝要求"
},
{
    "id": 3,
    "label": "welding",
    "source": "焊接工件2", "target": "焊接"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接", "target": "质量信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "待焊尺寸信息", "target": "焊缝结构"
},
{
    "id": 3,
    "label": "contain",
    "source": "待焊尺寸信息", "target": "待焊部位直径"
},
{
    "id": 3,
    "label": "contain",
    "source": "待焊尺寸信息", "target": "待焊部位壁厚"
},
{
    "id": 3,
    "label": "contain",
    "source": "待焊尺寸信息", "target": "待焊等级要求"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "待焊尺寸信息", "target": "焊接"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "焊接参数", "target": "待焊尺寸信息"
},
{
    "id": 3,
    "label": "contain_from",
    "source": "设备信息", "target": "焊接参数"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接参数", "target": "焊接电流"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接参数", "target": "聚焦电流"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接参数", "target": "加速电压"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接参数", "target": "真空度"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接参数", "target": "焊接速度"
},
{
    "id": 3,
    "label": "contain",
    "source": "设备信息", "target": "阴极使用时间"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "焊缝背面余高"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "焊缝内部质量33"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "焊缝力学性能34"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "壳体尺寸信息", "target": "焊缝质量信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊缝质量信息", "target": "焊缝正面余高"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊缝质量信息", "target": "焊缝背面余高"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊缝质量信息", "target": "焊缝内部质量"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊缝质量信息", "target": "焊缝力学性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "焊缝质量信息", "target": "质量信息"
},
{
    "id": 3,
    "label": "input",
    "source": "质量信息", "target": "生产优化模型"
},
{
    "id": 3,
    "label": "output",
    "source": "生产优化模型", "target": "推荐工艺参数"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "推荐工艺参数", "target": "焊接"
},
{
    "id": 3,
    "label": "next",
    "source": "2021-06-16_10:07:19", "target": "2021-06-16_10:22:19"
},
{
    "id": 3,
    "label": "previous",
    "source": "2021-06-16_10:22:19", "target": "2021-06-16_10:07:19"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "焊接工件1"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "真空电子束焊机"
},
{
    "id": 3,
    "label": "perform_a_machining",
    "source": "真空电子束焊机", "target": "焊接工件1"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体直径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体尾跳"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体中跳"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "旋压转速"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "旋压进给比"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "旋压圆弧半径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体小端壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体小端内径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体锥段壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体筒身壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体大端内径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体大端壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体总长"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "壳体错距"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "旋压工作角"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "高温合金钢GH4009"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体小端壁厚", "target": "5.2mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体小端内径", "target": "39.42mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体锥段壁厚", "target": "2.49mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体筒身壁厚", "target": "2.47mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体大端内径", "target": "69.86mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体大端壁厚", "target": "0.59mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体总长", "target": "352mm"
},
{
    "id": 3,
    "label": "has",
    "source": "旋压工作角", "target": "26"
},
{
    "id": 3,
    "label": "has",
    "source": "旋压圆弧半径", "target": "2mm"
},
{
    "id": 3,
    "label": "has",
    "source": "旋压进给比", "target": "0.16"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体错距", "target": "2.2mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压转速", "target": "160"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体中跳", "target": "0.1mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尾跳", "target": "0.06mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "0.06mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "0.1mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "160"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "2.2mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "0.16"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "2mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "26"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "352mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "0.59mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "69.86mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "2.47mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "2.49mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "39.42mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "5.2mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件1", "target": "壳体总长"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "旋压工作角"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "焊接工件2"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "真空电子束焊机"
},
{
    "id": 3,
    "label": "perform_a_machining",
    "source": "真空电子束焊机", "target": "焊接工件2"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "原材料"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体直径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体尾跳"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体中跳"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "旋压转速"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "旋压进给比"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "旋压圆弧半径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体小端壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体小端内径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体锥段壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体筒身壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体大端内径"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体大端壁厚"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "壳体总长"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "旋压工作角"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "高温合金钢GH3628"
},
{
    "id": 3,
    "label": "has",
    "source": "原材料", "target": "高温合金钢GH3628"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体小端壁厚", "target": "5.05mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体小端内径", "target": "39.42mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体锥段壁厚", "target": "2.49mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体筒身壁厚", "target": "2.48mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体大端内径", "target": "69.86mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体大端壁厚", "target": "0.6mm"
},
{
    "id": 3,
    "label": "has",
    "source": "壳体总长", "target": "352mm"
},
{
    "id": 3,
    "label": "has",
    "source": "旋压工作角", "target": "26"
},
{
    "id": 3,
    "label": "has",
    "source": "旋压圆弧半径", "target": "4mm"
},
{
    "id": 3,
    "label": "has",
    "source": "旋压进给比", "target": "0.26"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体错距", "target": "2.4mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压转速", "target": "260"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体中跳", "target": "0.24mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尾跳", "target": "0.16mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "0.16mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "0.24mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "260"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "2.4mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "0.26"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "4mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "26"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "352mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "0.6mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "69.86mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "2.48mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "2.49mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "39.42mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接工件2", "target": "5.05mm"
},
{
    "id": 3,
    "label": "contain",
    "source": "GAK12-发动机壳体", "target": "焊接工件1"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "正背面余高"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "表面缺陷"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "内部质量"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "拉伸强度"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "焊接变形"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "真空度"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "加速电压"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "电子束流"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件2", "target": "电子聚焦量"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "真空度"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "加速电压"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "电子束流"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "电子聚焦量"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "真空度"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "加速电压"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "电子束流"
},
{
    "id": 3,
    "label": "has",
    "source": "焊接工件1", "target": "电子聚焦量"
},
{
    "id": 3,
    "label": "contain",
    "source": "真空度", "target": "-890"
},
{
    "id": 3,
    "label": "contain",
    "source": "加速电压", "target": "130"
},
{
    "id": 3,
    "label": "contain",
    "source": "电子束流", "target": "0.167"
},
{
    "id": 3,
    "label": "contain",
    "source": "电子聚焦量", "target": "2034"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "表面缺陷"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:07:19", "target": "错边"
},
{
    "id": 3,
    "label": "contain",
    "source": "表面缺陷", "target": "错边"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "焊接工件2"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "拉伸强度"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "焊接变形"
},
{
    "id": 3,
    "label": "contain",
    "source": "拉伸强度", "target": "9MPa"
},
{
    "id": 3,
    "label": "contain",
    "source": "焊接变形", "target": "1mm"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "9MPa"
},
{
    "id": 3,
    "label": "has",
    "source": "2021-06-16_10:22:19", "target": "1mm"
},
{
    "id": 3,
    "label": "焊缝表面及焊缝内部形成圆形椭圆形或带状的及不规则的孔洞",
    "source": "气孔", "target": "has_feature"
},
{
    "id": 3,
    "label": "环境湿度大",
    "source": "气孔", "target": "make_a_cause"
},
{
    "id": 3,
    "label": "焊前对零件和焊丝进行真空除氢热处理",
    "source": "气孔", "target": "give_a_measure"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "保护气体中有水份或碳氧化合物"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "焊接不稳定"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "气体保护不良"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "焊丝焊件清理不干净有油污"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "焊接速度过高使得气不易逸出"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "焊接冷却快使得气不易逸出"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "氩气流量过小或喷嘴直径不合适"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "焊接材料不致密"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "焊丝有夹渣"
},
{
    "id": 3,
    "label": "cause",
    "source": "气孔", "target": "渣焊接垫板潮湿"
},
{
    "id": 3,
    "label": "measure",
    "source": "气孔", "target": "用高速钢丝轮打磨零件焊接区内外表面及接缝端面"
},
{
    "id": 3,
    "label": "measure",
    "source": "气孔", "target": "把零件内外表面用丙酮或无水酒精彻底清洗干净"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "烧穿", "target": "基本金属上形成孔洞"
},
{
    "id": 3,
    "label": "cause",
    "source": "烧穿", "target": "焊接电流过大"
},
{
    "id": 3,
    "label": "cause",
    "source": "烧穿", "target": "焊接装配间隙太大"
},
{
    "id": 3,
    "label": "cause",
    "source": "烧穿", "target": "焊速太慢，电弧在焊缝处停留时间过长焊机故障"
},
{
    "id": 3,
    "label": "cause",
    "source": "烧穿", "target": "焊接件变形（没压紧）"
},
{
    "id": 3,
    "label": "cause",
    "source": "烧穿", "target": "操作不正确造成短路"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "在过渡区上的裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "在焊缝上的纵向、横向裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "从焊缝延伸到基体金属上的裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "补焊处的裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "熄弧处弧坑裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "按温度及时间不同分热裂纹和冷裂纹"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "结构不合理使焊缝过于集中"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "装配件不协调内应力过大"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "焊接顺序不当造成强大的收缩应力焊接收缩应力"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "超过焊缝金属的强度极限"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "现场温度过低，冷却速度过快"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "定位焊点距离太大"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "在过渡区上的裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "在焊缝上的纵向、横向裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "从焊缝延伸到基体金属上的裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "补焊处的裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "熄弧处弧坑裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹", "target": "按温度及时间不同分热裂纹和冷裂纹"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "加热或熄弧过快"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "加热或补焊次数过多"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "焊丝材料不对"
},
{
    "id": 3,
    "label": "cause",
    "source": "裂纹", "target": "焊缝向基体过渡太急剧"
},
{
    "id": 3,
    "label": "measure",
    "source": "裂纹", "target": "焊前对零件和焊丝进行彻底清理，最大限度地杜绝外部氢气来源"
},
{
    "id": 3,
    "label": "measure",
    "source": "裂纹", "target": "尽量减少焊接时的热量输入"
},
{
    "id": 3,
    "label": "measure",
    "source": "裂纹", "target": "焊前250℃整体预热焊后置于150℃的烘箱中"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "未焊透", "target": "熔化金属和基本金属间或焊缝层间有局部的未溶合"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "未焊透", "target": "在丁字接及搭接接头中焊缝金属往基体金属溶透不足而留下空隙"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "焊接电流太小或焊接速度太快"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "焊缝装配间隙过小"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "坡口不正确"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "焊丝加入过早过多"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "定位焊点过大过密"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "焊件清理不彻底有油污"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "自动焊焊偏"
},
{
    "id": 3,
    "label": "cause",
    "source": "未焊透", "target": "钨极距溶池距离大"
},
{
    "id": 3,
    "label": "measure",
    "source": "未焊透", "target": "改变前后连接环的接缝形式和热源输入位置"
},
{
    "id": 3,
    "label": "measure",
    "source": "未焊透", "target": "采用电阻滚焊或连续点焊"
},
{
    "id": 3,
    "label": "measure",
    "source": "未焊透", "target": "采用真空电子束焊"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "咬边", "target": "在焊缝边缘与基体金属交界处形成凹陷"
},
{
    "id": 3,
    "label": "cause",
    "source": "咬边", "target": "焊接电流过大"
},
{
    "id": 3,
    "label": "cause",
    "source": "咬边", "target": "焊接电弧电压过大"
},
{
    "id": 3,
    "label": "cause",
    "source": "咬边", "target": "焊接速度太快"
},
{
    "id": 3,
    "label": "cause",
    "source": "咬边", "target": "焊接顺序不对"
},
{
    "id": 3,
    "label": "cause",
    "source": "咬边", "target": "焊件放置的位置不对"
},
{
    "id": 3,
    "label": "cause",
    "source": "咬边", "target": "操作方法不正确"
},
{
    "id": 3,
    "label": "measure",
    "source": "咬边", "target": "选择正确的焊接电流和焊接速度"
},
{
    "id": 3,
    "label": "measure",
    "source": "咬边", "target": "电弧不要太长"
},
{
    "id": 3,
    "label": "measure",
    "source": "咬边", "target": "提高操作水平"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "弧坑", "target": "在焊缝熄弧处留下一个凹坑"
},
{
    "id": 3,
    "label": "cause",
    "source": "弧坑", "target": "操作不当，收弧太快，熄弧时间短"
},
{
    "id": 3,
    "label": "cause",
    "source": "弧坑", "target": "收弧时焊丝填不足"
},
{
    "id": 3,
    "label": "cause",
    "source": "弧坑", "target": "薄件焊接时电流过大"
},
{
    "id": 3,
    "label": "measure",
    "source": "弧坑", "target": "提高操作水平"
},
{
    "id": 3,
    "label": "measure",
    "source": "弧坑", "target": "焊接电流不要过大"
},
{
    "id": 3,
    "label": "measure",
    "source": "弧坑", "target": "正确使用熄弧时的衰减电流"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "凹陷", "target": "焊接高度低于基体金属"
},
{
    "id": 3,
    "label": "cause",
    "source": "凹陷", "target": "焊接电流大或焊机故障"
},
{
    "id": 3,
    "label": "cause",
    "source": "凹陷", "target": "加入焊丝不及时"
},
{
    "id": 3,
    "label": "cause",
    "source": "凹陷", "target": "焊件与整板间有间隙"
},
{
    "id": 3,
    "label": "cause",
    "source": "凹陷", "target": "对缝间隙大或焊丝直径小"
},
{
    "id": 3,
    "label": "cause",
    "source": "错边", "target": "零件的尺寸偏差"
},
{
    "id": 3,
    "label": "cause",
    "source": "错边", "target": "焊前装配不当及焊接变形"
},
{
    "id": 3,
    "label": "cause",
    "source": "错边", "target": "材料厚度偏差"
},
{
    "id": 3,
    "label": "cause",
    "source": "错边", "target": "焊缝两侧工件刚性不同"
},
{
    "id": 3,
    "label": "measure",
    "source": "错边", "target": "提高零件焊前的尺寸精度并进行选配"
},
{
    "id": 3,
    "label": "measure",
    "source": "错边", "target": "定位焊后检验把关"
},
{
    "id": 3,
    "label": "measure",
    "source": "错边", "target": "错边量合格后再进行缝焊"
},
{
    "id": 3,
    "label": "detect",
    "source": "工件", "target": "毛坯尺寸检测"
},
{
    "id": 3,
    "label": "detect",
    "source": "工件", "target": "理化性能检测"
},
{
    "id": 3,
    "label": "perform_a_machining",
    "source": "工件", "target": "旋压加工"
},
{
    "id": 3,
    "label": "detect",
    "source": "旋压加工", "target": "旋压成型质量检测"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "产品型号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "加工图号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "炉号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "编号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "材料牌号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "设备型号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "加工日期"
},
{
    "id": 3,
    "label": "contain",
    "source": "毛坯尺寸检测", "target": "尺寸检测项"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检测项", "target": "厚度"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检测项", "target": "内径"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检测项", "target": "长度"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检测项", "target": "角度"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检测项", "target": "半径"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "厚度", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "内径", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "长度", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "角度", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "半径", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "contain",
    "source": "理化性能检测", "target": "理化检测项"
},
{
    "id": 3,
    "label": "contain",
    "source": "理化检测项", "target": "力学性能"
},
{
    "id": 3,
    "label": "contain",
    "source": "理化检测项", "target": "化学成分"
},
{
    "id": 3,
    "label": "contain",
    "source": "理化检测项", "target": "金相组织"
},
{
    "id": 3,
    "label": "contain",
    "source": "力学性能", "target": "延伸率"
},
{
    "id": 3,
    "label": "contain",
    "source": "力学性能", "target": "抗拉强度"
},
{
    "id": 3,
    "label": "contain",
    "source": "力学性能", "target": "屈服强度"
},
{
    "id": 3,
    "label": "contain",
    "source": "力学性能", "target": "残余应力"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "延伸率", "target": "实际性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "抗拉强度", "target": "实际性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "屈服强度", "target": "实际性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "残余应力", "target": "实际性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "化学成分", "target": "实际性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "金相组织", "target": "实际性能"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "标准尺寸", "target": "匹配信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "实际尺寸", "target": "匹配信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "标准性能", "target": "匹配信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "实际性能", "target": "匹配信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "匹配信息", "target": "匹配合格"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "匹配信息", "target": "匹配合格"
},
{
    "id": 3,
    "label": "next_step",
    "source": "匹配超差", "target": "超差件停止加工"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压加工", "target": "机床状态"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压加工", "target": "工装状态"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压加工", "target": "润滑状态"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压加工", "target": "工艺参数"
},
{
    "id": 3,
    "label": "contain",
    "source": "机床状态", "target": "最大推力"
},
{
    "id": 3,
    "label": "contain",
    "source": "机床状态", "target": "旋轮径向力"
},
{
    "id": 3,
    "label": "contain",
    "source": "机床状态", "target": "机床轴向力"
},
{
    "id": 3,
    "label": "contain",
    "source": "机床状态", "target": "机床功率"
},
{
    "id": 3,
    "label": "contain",
    "source": "机床状态", "target": "主轴扭矩"
},
{
    "id": 3,
    "label": "contain",
    "source": "机床状态", "target": "设备震动"
},
{
    "id": 3,
    "label": "contain",
    "source": "工装状态", "target": "芯模跳动"
},
{
    "id": 3,
    "label": "contain",
    "source": "工装状态", "target": "旋轮工作角"
},
{
    "id": 3,
    "label": "contain",
    "source": "工装状态", "target": "工作圆弧"
},
{
    "id": 3,
    "label": "contain",
    "source": "工装状态", "target": "安装进度"
},
{
    "id": 3,
    "label": "contain",
    "source": "润滑状态", "target": "润滑液流量"
},
{
    "id": 3,
    "label": "contain",
    "source": "润滑状态", "target": "润滑液种类"
},
{
    "id": 3,
    "label": "contain",
    "source": "润滑状态", "target": "润滑液温度"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺参数", "target": "旋压轮下量"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺参数", "target": "进给比"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺参数", "target": "转速"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺参数", "target": "旋轮错距"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压成形质量检测", "target": "尺寸检验项"
},
{
    "id": 3,
    "label": "contain",
    "source": "旋压成形质量检测", "target": "金属探伤"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检验项", "target": "厚度"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检验项", "target": "内径"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检验项", "target": "长度"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检验项", "target": "跳动"
},
{
    "id": 3,
    "label": "contain",
    "source": "尺寸检验项", "target": "圆度"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "厚度", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "内径", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "长度", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "跳动", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "圆度", "target": "实际尺寸"
},
{
    "id": 3,
    "label": "contain",
    "source": "金属探伤", "target": "金属表面质量检测"
},
{
    "id": 3,
    "label": "contain",
    "source": "金属探伤", "target": "金属内部组织检测"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "标准尺寸", "target": "判定信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "实际尺寸", "target": "判定信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "金属探伤标准", "target": "判定信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "金属表面质量检测", "target": "判定信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "金属内部组织检测", "target": "判定信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "判定信息", "target": "判定合格"
},
{
    "id": 3,
    "label": "contain",
    "source": "判定信息", "target": "判定不合格"
},
{
    "id": 3,
    "label": "next_step",
    "source": "判定合格", "target": "流出"
},
{
    "id": 3,
    "label": "next_step",
    "source": "判定不合格", "target": "质量问题知识库"
},
{
    "id": 3,
    "label": "execute",
    "source": "建议整改项", "target": "效果验证"
},
{
    "id": 3,
    "label": "output",
    "source": "效果验证", "target": "达到效果"
},
{
    "id": 3,
    "label": "output",
    "source": "效果验证", "target": "未达效果"
},
{
    "id": 3,
    "label": "next_step",
    "source": "未达效果", "target": "质量问题知识库"
},
{
    "id": 3,
    "label": "next_step",
    "source": "达到效果", "target": "流出"
},
{
    "id": 3,
    "label": "contain",
    "source": "质量问题知识库", "target": "缺陷"
},
{
    "id": 3,
    "label": "contain",
    "source": "质量问题知识库", "target": "超差"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "波纹状剥离"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "局部变形"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "旋轮压缩"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "鳞状剥离"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "皱折"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "内部龟裂"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷", "target": "破裂"
},
{
    "id": 3,
    "label": "contain",
    "source": "皱折", "target": "旋转状皱折"
},
{
    "id": 3,
    "label": "contain",
    "source": "皱折", "target": "壁部皱折"
},
{
    "id": 3,
    "label": "contain",
    "source": "皱折", "target": "端部皱折"
},
{
    "id": 3,
    "label": "contain",
    "source": "内部龟裂", "target": "首次进给比比例过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "破裂", "target": "轴向破裂"
},
{
    "id": 3,
    "label": "contain",
    "source": "破裂", "target": "周向破裂"
},
{
    "id": 3,
    "label": "contain",
    "source": "破裂", "target": "人字形裂纹"
},
{
    "id": 3,
    "label": "contain",
    "source": "破裂", "target": "端部裂纹"
},
{
    "id": 3,
    "label": "contain",
    "source": "轴向破裂", "target": "壁厚减薄率过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "轴向破裂", "target": "硬化度大"
},
{
    "id": 3,
    "label": "contain",
    "source": "轴向破裂", "target": "进给比过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "轴向破裂", "target": "壁厚减薄率过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "周向破裂", "target": "旋轮成型角过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "周向破裂", "target": "壁厚减薄率过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "周向破裂", "target": "进给比过大"
},
{
    "id": 3,
    "label": "contain",
    "source": "端部裂纹", "target": "管胚端部有伤痕"
},
{
    "id": 3,
    "label": "contain",
    "source": "端部裂纹", "target": "硬化度大"
},
{
    "id": 3,
    "label": "contain",
    "source": "超差", "target": "形状精度超差"
},
{
    "id": 3,
    "label": "contain",
    "source": "超差", "target": "尺寸精度超差"
},
{
    "id": 3,
    "label": "input",
    "source": "毛胚尺寸检测", "target": "旋压质量预测模型"
},
{
    "id": 3,
    "label": "input",
    "source": "理化性能检测", "target": "旋压质量预测模型"
},
{
    "id": 3,
    "label": "input",
    "source": "旋压加工", "target": "旋压质量预测模型"
},
{
    "id": 3,
    "label": "input",
    "source": "理化性能检测", "target": "质量经验知识库"
},
{
    "id": 3,
    "label": "input",
    "source": "旋压加工", "target": "质量经验知识库"
},
{
    "id": 3,
    "label": "input",
    "source": "旋压件成形质量检测", "target": "质量经验知识库"
},
{
    "id": 3,
    "label": "driven",
    "source": "质量经验知识库", "target": "旋压质量预测模型"
},
{
    "id": 3,
    "label": "output",
    "source": "旋压质量预测模型", "target": "预估质量问题分布"
},
{
    "id": 3,
    "label": "output",
    "source": "旋压质量预测模型", "target": "推荐工艺参数"
},
{
    "id": 3,
    "label": "input",
    "source": "推荐工艺参数", "target": "旋压加工"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件", "target": "工件信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "热处理工艺图号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "产品批次"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "牌号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "热处理加工炉号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "热处理设备编号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "壳体尺寸信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "圆度"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "长度"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体尺寸信息", "target": "直线度"
},
{
    "id": 3,
    "label": "driven_by",
    "source": "关联分析模型", "target": "工件信息"
},
{
    "id": 3,
    "label": "driven_by",
    "source": "关联分析模型", "target": "壳体尺寸信息"
},
{
    "id": 3,
    "label": "driven_by",
    "source": "关联分析模型", "target": "热处理信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "关联分析模型", "target": "力学性能关键影响因素"
},
{
    "id": 3,
    "label": "contain",
    "source": "关联分析模型", "target": "生产参数相关性"
},
{
    "id": 3,
    "label": "",
    "source": "热处理信息", "target": "装炉信息"
},
{
    "id": 3,
    "label": "",
    "source": "热处理信息", "target": "气体流量检测信息"
},
{
    "id": 3,
    "label": "",
    "source": "热处理信息", "target": "整形生产参数"
},
{
    "id": 3,
    "label": "contain",
    "source": "装炉信息", "target": "数量"
},
{
    "id": 3,
    "label": "contain",
    "source": "装炉信息", "target": "装炉间隙"
},
{
    "id": 3,
    "label": "contain",
    "source": "装炉信息", "target": "垂直度"
},
{
    "id": 3,
    "label": "contain",
    "source": "气体流量检测信息", "target": "速度"
},
{
    "id": 3,
    "label": "contain",
    "source": "气体流量检测信息", "target": "方向"
},
{
    "id": 3,
    "label": "contain",
    "source": "整形生产参数", "target": "下压量"
},
{
    "id": 3,
    "label": "contain",
    "source": "整形生产参数", "target": "回弹量"
},
{
    "id": 3,
    "label": "next_step",
    "source": "热处理", "target": "质量信息测量"
},
{
    "id": 3,
    "label": "contain",
    "source": "质量信息测量", "target": "热处理后圆度"
},
{
    "id": 3,
    "label": "contain",
    "source": "质量信息测量", "target": "热处理后长度"
},
{
    "id": 3,
    "label": "contain",
    "source": "质量信息测量", "target": "热处理后直线度"
},
{
    "id": 3,
    "label": "contain",
    "source": "质量信息测量", "target": "热处理后力学性能"
},
{
    "id": 3,
    "label": "contain",
    "source": "热处理后力学性能", "target": "抗拉强度"
},
{
    "id": 3,
    "label": "contain",
    "source": "热处理后力学性能", "target": "屈服强度"
},
{
    "id": 3,
    "label": "contain",
    "source": "热处理后力学性能", "target": "断后伸长率"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "热处理后圆度", "target": "热处理后实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "热处理后长度", "target": "热处理后实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "热处理后直线度", "target": "热处理后实际尺寸"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "热处理后力学性能", "target": "热处理后实际尺寸"
},
{
    "id": 3,
    "label": "drive",
    "source": "热处理后标准尺寸", "target": "判定热处理信息"
},
{
    "id": 3,
    "label": "drive",
    "source": "热处理后实际尺寸", "target": "判定热处理信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "判定热处理信息", "target": "判定热处理合格"
},
{
    "id": 3,
    "label": "contain",
    "source": "判定热处理信息", "target": "判定热处理不合格"
},
{
    "id": 3,
    "label": "next_step",
    "source": "判定热处理合格", "target": "流出"
},
{
    "id": 3,
    "label": "execute",
    "source": "判定热处理不合格", "target": "壳体整形"
},
{
    "id": 3,
    "label": "execute",
    "source": "壳体整形", "target": "效果验证"
},
{
    "id": 3,
    "label": "next_step",
    "source": "效果验证", "target": "重新判定"
},
{
    "id": 3,
    "label": "next_step",
    "source": "重新判定", "target": "判定热处理信息"
},
{
    "id": 3,
    "label": "driven_by",
    "source": "生产优化模型", "target": "热处理信息"
},
{
    "id": 3,
    "label": "driven_by",
    "source": "生产优化模型", "target": "质量信息测量"
},
{
    "id": 3,
    "label": "execute",
    "source": "生产优化模型", "target": "推荐工艺参数"
},
{
    "id": 3,
    "label": "execute",
    "source": "推荐工艺参数", "target": "热处理信息"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "壳体", "target": "工件"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "焊接工件1", "target": "壳体"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "焊接工件2", "target": "壳体"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体信息", "target": "壳体外形尺寸"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体信息", "target": "壳体标准模型"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "外挂件"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "吊挂"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "弹簧支座"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "旋牙筒体段"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "前封头"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "后封头"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体外形尺寸", "target": "后封头"
},
{
    "id": 3,
    "label": "used_by",
    "source": "壳体信息", "target": "匹配拟合"
},
{
    "id": 3,
    "label": "contain",
    "source": "匹配拟合", "target": "不匹配"
},
{
    "id": 3,
    "label": "contain",
    "source": "匹配拟合", "target": "匹配"
},
{
    "id": 3,
    "label": "next_step",
    "source": "不匹配", "target": "流出待工艺师处理"
},
{
    "id": 3,
    "label": "next_step",
    "source": "匹配", "target": "机外预调输入"
},
{
    "id": 3,
    "label": "next_step",
    "source": "机外预调输入", "target": "机外预调"
},
{
    "id": 3,
    "label": "next_step",
    "source": "机外预调", "target": "输出"
},
{
    "id": 3,
    "label": "contain",
    "source": "输出", "target": "校调G代码"
},
{
    "id": 3,
    "label": "contain",
    "source": "输出", "target": "壳体三维点云数据"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "校调G代码", "target": "机外预调数据库"
},
{
    "id": 3,
    "label": "belong_to",
    "source": "壳体三维点云数据", "target": "机外预调数据库"
},
{
    "id": 3,
    "label": "used_by",
    "source": "机外预调数据库", "target": "加工中心校调"
},
{
    "id": 3,
    "label": "next_step",
    "source": "加工中心校调", "target": "是否试切"
},
{
    "id": 3,
    "label": "contain",
    "source": "是否试切", "target": "试切"
},
{
    "id": 3,
    "label": "contain",
    "source": "是否试切", "target": "不试切"
},
{
    "id": 3,
    "label": "next_step",
    "source": "试切", "target": "燃烧室壳体加工"
},
{
    "id": 3,
    "label": "next_step",
    "source": "不试切", "target": "流出待工艺师处理"
},
{
    "id": 3,
    "label": "next_step",
    "source": "流出待工艺师处理", "target": "迭代优化"
},
{
    "id": 3,
    "label": "next_step",
    "source": "迭代优化", "target": "机外预调输入"
},
{
    "id": 3,
    "label": "according_to",
    "source": "校调G代码", "target": "壳体在机床上信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体在机床上信息", "target": "母线最高点距吊挂距离"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体在机床上信息", "target": "母线最高点距弹簧距离"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体在机床上信息", "target": "吊挂距中心距离"
},
{
    "id": 3,
    "label": "contain",
    "source": "壳体在机床上信息", "target": "端面跳动"
},
{
    "id": 3,
    "label": "according_to",
    "source": "壳体在机床上信息", "target": "加工中心校调"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "基本信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "工件信息", "target": "工艺信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "基本信息", "target": "产品型号"
},
{
    "id": 3,
    "label": "contain",
    "source": "基本信息", "target": "产品图号"
},
{
    "id": 3,
    "label": "contain",
    "source": "基本信息", "target": "产品编号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺信息", "target": "工序号"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺信息", "target": "加工方法"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺信息", "target": "检测方法"
},
{
    "id": 3,
    "label": "contain",
    "source": "工艺信息", "target": "判定要求"
},
{
    "id": 3,
    "label": "next_step",
    "source": "工件信息", "target": "图像采集"
},
{
    "id": 3,
    "label": "contain",
    "source": "图像采集", "target": "编码格式"
},
{
    "id": 3,
    "label": "contain",
    "source": "图像采集", "target": "图像编号"
},
{
    "id": 3,
    "label": "contain",
    "source": "图像采集", "target": "存储位置"
},
{
    "id": 3,
    "label": "contain",
    "source": "图像采集", "target": "采集方式"
},
{
    "id": 3,
    "label": "contain",
    "source": "采集方式", "target": "底片扫描"
},
{
    "id": 3,
    "label": "contain",
    "source": "采集方式", "target": "数字成像"
},
{
    "id": 3,
    "label": "next_step",
    "source": "图像采集", "target": "图像缺陷采集"
},
{
    "id": 3,
    "label": "contain",
    "source": "图像缺陷采集", "target": "缺陷信息"
},
{
    "id": 3,
    "label": "contain",
    "source": "图像缺陷采集", "target": "缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷信息", "target": "缺陷位置"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷信息", "target": "缺陷数量"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷信息", "target": "缺陷性质"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷信息", "target": "缺陷尺寸"
},
{
    "id": 3,
    "label": "next_step",
    "source": "缺陷尺寸", "target": "判定结果"
},
{
    "id": 3,
    "label": "contain",
    "source": "判定结果", "target": "判定不合格"
},
{
    "id": 3,
    "label": "contain",
    "source": "判定结果", "target": "判定合格"
},
{
    "id": 3,
    "label": "next_step",
    "source": "判定不合格", "target": "人工复查"
},
{
    "id": 3,
    "label": "next_step",
    "source": "人工复查", "target": "生成报告"
},
{
    "id": 3,
    "label": "apply",
    "source": "缺陷图像", "target": "样本训练"
},
{
    "id": 3,
    "label": "next_step",
    "source": "样本训练", "target": "模型优化迭代"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "烧穿缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "气孔缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "裂纹缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "未焊透缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "咬边缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "弧坑缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "凹陷缺陷图像"
},
{
    "id": 3,
    "label": "contain",
    "source": "缺陷图像", "target": "错边缺陷图像"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "烧穿缺陷图像", "target": "烧穿"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "气孔缺陷图像", "target": "气孔"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "裂纹缺陷图像", "target": "裂纹"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "未焊透缺陷图像", "target": "未焊透"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "咬边缺陷图像", "target": "咬边"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "弧坑缺陷图像", "target": "弧坑"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "凹陷缺陷图像", "target": "凹陷"
},
{
    "id": 3,
    "label": "has_feature",
    "source": "错边缺陷图像", "target": "错边"
}]
const nodes = []
var finalnode = []
links.map((element) => {
    if (!nodes.includes(element.source)) {
        nodes.push(element.source)
    }
    if (!nodes.includes(element.target)) {
        nodes.push(element.target)
    }

})
finalnode = nodes.map(e => {
    return ({
        "id": e,
        "label": e,
        "name": e,
        "group": Math.floor(Math.random() * 10) + 1
    })
})
console.log(finalnode)

JSON.stringify(finalnode)

