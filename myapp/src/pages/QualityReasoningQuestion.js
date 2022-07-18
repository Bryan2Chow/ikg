import React, { Component } from 'react';
import { Button, Input, Card } from 'antd';

const { Search } = Input
export default class QualityReasoningQuestion extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <h3>| 问题描述</h3>
                <Card style={{ marginTop: 10 }}>
                    <Search placeholder='请输入问题描述...' enterButton />
                    <br />
                    <h3 >热门问题：<a href="#" style={{ color: 'blue' }}>旋压机床加工薄壁件产生周向断裂的原因？薄壁壳体焊缝出现气孔的解决方案？</a></h3>

                </Card>

                <h3 style={{ marginTop: 20 }}>| 问题结果</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card style={{ width: "60%" }}>
                        <span>旋轮成型角过大，进给比过大，壁厚减薄率过大</span>
                    </Card>
                    <Card style={{ width: "35%" }}>
                        <span>没有满意的解决方案？</span>
                        <Button type='primary' >在线分析</Button>
                    </Card>
                </div>


                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: "60%" }}>
                        <h3 style={{ marginTop: 20 }}>| 关系图谱</h3>
                        <Card style={{ height: 200 }}>

                        </Card>
                    </div>
                    <div style={{ width: "35%" }}>
                        <h3 style={{ marginTop: 15 }}>| 相关链接</h3>
                        <Card style={{}}>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>数控机床X轴镉一段时间就跑尺寸，求助-数控技术-机械社区</li>
                                <hr />
                                <li>数控机床X轴尺寸忽大忽小怎么办-中华文本库</li>
                                <hr />
                                <li>cnc机床间隙调整方法-百度文库</li>
                                <hr />
                                <li>各位大佬沈阳机床的数控车床每次开关机之后，x轴显示向下</li>
                            </ul>
                        </Card>
                    </div>
                </div>



            </div>
        )
    }
}
