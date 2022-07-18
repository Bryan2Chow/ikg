import React, { Component } from 'react';
import { Card, Button, Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;
export default class MultiSetp extends Component {
    state = {
        MultiSetpNumber: [1, 2, 3, 4, 5],
        SelectedRelation: ''
    };
    MultiSetpNumber = (e) => {
        console.log(e);
        this.setState({
            SelectedRelation: e
        })
    };
    StartQuery = () => {
        console.log(this)
    }
    render() {
        console.log(this)
        if (this.props.CheckInfor.Multi === true) {
            return (
                <div style={{ marginTop: 50 }}>
                    <h3 style={{ marginTop: 20 }}>| 追溯信息</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Input placeholder='请输入查询节点名称' style={{ width: "20%" }} />
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

                        <Button type='primary' onClick={this.StartQuery}>开始查询</Button>
                    </div>

                    <h3 style={{ marginTop: 20 }}>| 图追溯信息路径关系图谱</h3>
                    <Card >
                    </Card>
                </div>
            )
        } else {
            return (
                null
            )
        }

    }
}