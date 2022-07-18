import React, { Component } from 'react';
import { Card, Button, Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;
export default class RelationQuery extends Component {
    state = {
        Relationship: [
            'has_(X)',
            'contain',
            'location',
            'corresponding',
            'next',
            'lead_to',
            'execute_a_measurement',
            'perform_a_weld / heat_treat / machining',
            'make_an_image_detection',
            'detect_a_feature',
            'make_a_reason',
            'cause',
            'immediate_cause',
            'indirect_cause',
            'root_cause',
            'measure',
            'immediate_measure',
            'indirect_measure',
            'root_measure',
        ],
        SelectedRelation: ''
    };
    RelationChange = (e) => {
        console.log(e);
        this.setState({
            SelectedRelation: e
        })
    }
    render() {
        if (this.props.CheckInfor.Relation === true) {
            return (
                <div style={{ marginTop: 50 }}>
                    <h3 style={{ marginTop: 20 }}>| 实体信息</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Input placeholder='输入头实体' style={{ width: "20%" }} />
                        <Select
                            style={{
                                width: 200,
                            }}
                            placeholder="Select a relation"
                            // value={this.state.SelectedRelation}
                            onChange={this.RelationChange}
                        >
                            {this.state.Relationship.map((Relationship) => (
                                <Option key={Relationship}>{Relationship}</Option>
                            ))}
                        </Select>
                        <Input placeholder='输入尾实体' style={{ width: "20%" }} />
                        <Button type='primary'>开始查询</Button>
                    </div>

                    <h3 style={{ marginTop: 20 }}>| 关系图谱</h3>
                    <Card >
                    </Card>
                </div>
            )
        } else {
            return null
        }

    }
}
