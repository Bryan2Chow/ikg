import React, { Component } from 'react';
import { Card, Input, Table } from 'antd';
import { nanoid } from 'nanoid';
import { ConstructGraph } from './ConstructGraph.js';
import '../style/style.css'

const { Search } = Input
const columns = [
    {
        title: 'entity1',
        dataIndex: 'entity1',

    },
    {
        title: 'Relation',
        dataIndex: 'Relation',
    },
    {
        title: 'entity2',
        dataIndex: 'entity2',
    },
];
const data = [
    {
        key: '1',
        entity1: 'John Brown',
        Relation: '￥300,000.00',
        entity2: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        entity1: 'Jim Green',
        Relation: '￥1,256,000.00',
        entity2: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        entity1: 'Joe Black',
        Relation: '￥120,000.00',
        entity2: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        entity1: 'John Brown',
        Relation: '￥300,000.00',
        entity2: 'New York No. 1 Lake Park',
    },
    {
        key: '5',
        entity1: 'Jim Green',
        Relation: '￥1,256,000.00',
        entity2: 'London No. 1 Lake Park',
    },
    {
        key: '6',
        entity1: 'Joe Black',
        Relation: '￥120,000.00',
        entity2: 'Sidney No. 1 Lake Park',
    },
];
export default class EntityQuery extends Component {
    state = {
        data: {
            nodes: [
                { "id": "周彬", "label": '周彬', "name": '周彬' },
                { "id": "申兴旺", "label": '申兴旺', "name": '申兴旺' },
                { "id": "孙亦程", "label": '孙亦程', "name": '孙亦程' },
                { "id": "张辉辉", "label": '张辉辉', "name": '张辉辉' },
                { "id": "花豹", "label": '花豹', "name": '花豹' },
                { "id": "韩统优", "label": '韩统优', "name": '韩统优' },
                { "id": "李琦", "label": '李琦', "name": '李琦' },
                { "id": "瞿伟斌", "label": '瞿伟斌', "name": '瞿伟斌' },
                { "id": "晋正凯", "label": '晋正凯', "name": '晋正凯' },
                { "id": "张飞", "label": '张飞', "name": '张飞' },

            ],
            links: [
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '周彬',
                    "target": '孙亦程'
                },
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '申兴旺',
                    "target": '孙亦程'
                },
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '周彬',
                    "target": '张辉辉'
                },
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '周彬',
                    "target": '孙亦程'
                },
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '周彬',
                    "target": '李琦'
                },
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '周彬',
                    "target": '花豹'
                },
                {
                    "id": nanoid(),
                    "label": '师兄',
                    "source": '周彬',
                    "target": '瞿伟斌'
                },

            ],
            width: 1000,
            height: 1000,
            colorList: ['#FD7623', '#3388B1', '#D82952', '#F3D737', '#409071', '#D64E52'],
        }
    }
    SearchBasedEntity = (e) => {
        console.log(e)
        const removechild = document.getElementsByClassName('svgs')
        let amounts = removechild.length
        const parentnodes = document.getElementsByClassName('container')
        for (var i = 0; i < amounts; i++) {
            parentnodes[0].removeChild(removechild[0])
        }
        ConstructGraph(this.state.data)
    }
    render() {
        if (this.props.CheckInfor.Entity === true) {
            return (
                <div style={{ marginTop: 50 }}>
                    <h3 style={{ marginTop: 20 }}>| 实体信息</h3>
                    <Search enterButton="开始查询" placeholder='输入实体名称' onSearch={this.SearchBasedEntity} />

                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: "45%" }}>
                            <h3>| 关系图谱</h3>
                            <Card className='container'></Card>
                        </div>
                        <div style={{ width: "45%" }}>
                            <h3>| 关系列表</h3>
                            <Card>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    bordered
                                    title={() => '关系列表'}
                                    pagination={{
                                        pageSize: 4
                                    }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }

    }
    componentDidMount() {
        // console.log(this);
        // console.log(typeof (ConstructGraph))

    }
}



