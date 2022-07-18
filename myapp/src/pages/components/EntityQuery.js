import React, { Component } from 'react';
import { Card, Button, Input } from 'antd';

const { Search } = Input
export default class EntityQuery extends Component {
    render() {
        if (this.props.CheckInfor.Entity === true) {
            return (
                <div style={{ marginTop: 50 }}>
                    <h3 style={{ marginTop: 20 }}>| 实体信息</h3>
                    <Search enterButton="开始查询" placeholder='输入实体名称' />

                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: "45%" }}>
                            <h3>| 关系图谱</h3>
                            <Card>

                            </Card>
                        </div>
                        <div style={{ width: "45%" }}>
                            <h3>| 关系列表</h3>
                            <Card>

                            </Card>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }

    }
}
