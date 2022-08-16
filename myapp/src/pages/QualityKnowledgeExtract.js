import React, { Component } from 'react';
import { Button, Card, Input, Image } from 'antd';
import { ConstructGraph } from './components/ConstructGraph';
import { nanoid } from 'nanoid';
import './style/style.css'
const { TextArea } = Input
export default class QualityKnowledgeExtract extends Component {
    state = {
        data: {
            nodes: [
                { "id": "旋压机床", "label": '旋压机床', "name": '旋压机床', "group": 1 },
                { "id": "旋轮成型角过大", "label": '旋轮成型角过大', "name": '旋轮成型角过大', "group": 2 },
                { "id": "薄壁壳体", "label": '薄壁壳体', "name": '薄壁壳体', "group": 2 },
                { "id": "轴向裂纹", "label": '轴向裂纹', "name": '轴向裂纹', "group": 3 },
            ],
            links: [
                {
                    "id": nanoid(),
                    "label": 'has',
                    "source": '旋压机床',
                    "target": '旋轮成型角过大'
                },
                {
                    "id": nanoid(),
                    "label": 'hasMachining',
                    "source": '旋压机床',
                    "target": '薄壁壳体'
                },
                {
                    "id": nanoid(),
                    "label": 'detect_a_feature',
                    "source": '薄壁壳体',
                    "target": '轴向裂纹'
                },
                {
                    "id": nanoid(),
                    "label": 'lead_to',
                    "source": '旋轮成型角过大',
                    "target": '轴向裂纹'
                },


            ],
            width: 1000,
            height: 1000,
            colorList: ['#FD7623', '#3388B1', '#D82952', '#F3D737', '#409071', '#D64E52'],
        }
    }
    GenerateGraph = () => {
        ConstructGraph(this.state.data)
    }
    render() {
        return (
            <div style={{ width: '100%', height: "100%", display: 'flex', flexDirection: 'column', }}>
                <h2>质量信息抽取</h2>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%", height: "50%" }}>
                    <div style={{ width: '32%' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <h3 style={{ margin: 0, marginLeft: 10, fontSize: "20px" }}>| 输入 </h3>
                            <Button type="primary" style={{ marginLeft: '20%' }}>分析</Button>
                            <Button type="primary" style={{ marginLeft: 20 }}>提交</Button>
                        </div>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>

                    <div style={{ width: '32%' }}>

                        <h3 style={{ margin: 0, marginLeft: 10, marginBottom: 6, fontSize: "20px" }}>| 实体识别 </h3>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>
                    <div style={{ width: '32%' }}>
                        <h3 style={{ margin: 0, marginLeft: 10, marginBottom: 6, fontSize: "20px" }}>| 关系识别 </h3>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%", height: "50%" }}>
                    <div style={{ width: '49%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 style={{ margin: 0, marginLeft: 10, fontSize: "20px" }}>| 语义依存句法分析 </h3>
                            <Button type="primary" style={{ marginLeft: '40%' }}>分析</Button>
                        </div>
                        <Card style={{ height: "93%", marginTop: 10, overflow: 'auto' }} >
                            <img src={require('./img/依存语法分析.png')}></img>
                        </Card>
                    </div>

                    <div style={{ width: '49%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 style={{ margin: 0, marginLeft: 10, fontSize: "20px" }}>| 知识图谱三元组 </h3>
                            <Button type="primary" style={{ marginLeft: '45%' }} onClick={this.GenerateGraph}>生成</Button>
                        </div>
                        <Card style={{ height: "93%", marginTop: 10, overflow: 'hidden' }} className='container' />
                    </div>
                </div>
            </div >
        )
    }
}
