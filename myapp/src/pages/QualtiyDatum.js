import React, { Component } from 'react';
import { Radio, } from 'antd';
import EntityQuery from './components/EntityQuery';
import RelationQuery from './components/RelationQuery';
import MultiSetp from './components/MultiSetp';

export default class QualtiyDatum extends Component {
    state = {
        CheckInfor: {
            Entity: true,
            Relation: false,
            Multi: false,
        }
    }
    ChangeModel = (e) => {
        console.log(e);
        if (e.target.defaultValue === '实体查询') {
            this.setState({
                CheckInfor: {
                    Entity: true,
                    Relation: false,
                    Multi: false,
                }
            })
        }
        if (e.target.defaultValue === '关系查询') {
            this.setState({
                CheckInfor: {
                    Entity: false,
                    Relation: true,
                    Multi: false,
                }
            })
        }
        if (e.target.defaultValue === '多跳追溯') {
            this.setState({
                CheckInfor: {
                    Entity: false,
                    Relation: false,
                    Multi: true,
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Radio.Group defaultValue="实体查询" buttonStyle="solid" style={{ verticalAlign: 'middle' }} >
                    <Radio.Button value="实体查询" style={{ marginRight: 80 }} onClick={this.ChangeModel}>实体查询</Radio.Button>
                    <Radio.Button value="关系查询" style={{ marginRight: 80 }} onClick={this.ChangeModel}>关系查询</Radio.Button>
                    <Radio.Button value="多跳追溯" onClick={this.ChangeModel}>多跳追溯</Radio.Button>
                </Radio.Group>
                <EntityQuery CheckInfor={this.state.CheckInfor} />
                <RelationQuery CheckInfor={this.state.CheckInfor} />
                <MultiSetp CheckInfor={this.state.CheckInfor} />
            </div>
        )
    }
}
