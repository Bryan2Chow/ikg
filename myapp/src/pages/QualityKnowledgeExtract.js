import React, { Component } from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input
export default class QualityKnowledgeExtract extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: "100%", display: 'flex', flexDirection: 'column', }}>
                <h2>质量信息抽取</h2>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%", height: "50%" }}>
                    <div style={{ width: '30%' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <h3 style={{ margin: 0, marginLeft: 10 }}>| 输入 </h3>
                            <Button type="primary" style={{ marginLeft: '30%' }}>分析</Button>
                            <Button type="primary" style={{ marginLeft: 20 }}>提交</Button>
                        </div>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>

                    <div style={{ width: '30%' }}>
                        <h3 style={{ margin: 0, marginLeft: 10 }}>| 实体识别 </h3>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>
                    <div style={{ width: '30%' }}>
                        <h3 style={{ margin: 0, marginLeft: 10 }}>| 关系识别 </h3>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%", height: "50%" }}>
                    <div style={{ width: '45%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 style={{ margin: 0, marginLeft: 10 }}>| 语义依存句法分析 </h3>
                            <Button type="primary" style={{ marginLeft: '50%' }}>分析</Button>
                        </div>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>

                    <div style={{ width: '45%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 style={{ margin: 0, marginLeft: 10 }}>| 知识图谱三元组 </h3>
                            <Button type="primary" style={{ marginLeft: '50%' }}>生成</Button>
                        </div>
                        <TextArea style={{ height: "80%", marginTop: 10 }} />
                    </div>
                </div>
            </div >
        )
    }
}
