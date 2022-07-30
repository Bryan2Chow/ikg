import React, { Component } from 'react';
import { Card, Input } from 'antd';


const { Search } = Input;
class QualityGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ width: "100%", height: '100%' }}>
                <h3>| 薄壁壳体加工质量知识图谱概览</h3>

                <div style={{ width: "100%", height: '100%' }}>

                    <br />

                    <Search style={{ width: "100%" }} enterButton="查询" placeholder='MATCH(n) RETURN n LIMIT 100' onSearch={null} />
                    <br />
                    <br />
                    <Card style={{ position: "relative", height: "85%", width: "100%", overflow: 'hidden' }}>

                    </Card>


                </div>
            </div>
        );
    }
}

export default QualityGraph;