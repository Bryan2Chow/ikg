import React, { Component } from 'react';
import { Button, Input, Space, Radio, Select, Pagination, Card, Modal, Form } from 'antd';
import { CopyOutlined, DeleteOutlined, FileOutlined, DownloadOutlined, DiffOutlined } from '@ant-design/icons';
import FileList from './components/FileList';

const { Search, TextArea } = Input;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },

};
export default class FileOrgnize extends Component {
    state = {
        isModalVisbale: false
    }
    addFile = () => {
        this.setState({
            isModalVisbale: true
        })
    }
    handleOk = () => {
        this.setState({
            isModalVisbale: false
        })
    }
    handleCancel = () => {
        this.setState({
            isModalVisbale: false
        })
    }
    render() {
        return (
            <div  >
                <div>
                    {/* veticalalign为了使得button和space在一跳直线上 */}
                    <Radio.Group defaultValue="加工过程文档" buttonStyle="solid" style={{ verticalAlign: 'middle' }}>
                        <Radio.Button value="加工过程文档" style={{ marginRight: 100 }} >加工过程文档</Radio.Button>
                        <Radio.Button value="数字化检测图像" style={{ marginRight: 400 }} >数字化检测图像</Radio.Button>
                    </Radio.Group>
                    <Space style={{ verticalAlign: 'middle' }}>
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            // size="large"
                            width="200px"
                        />
                    </Space>
                </div>
                <div style={{ marginTop: 40 }}>
                    <Button style={{ marginRight: 40 }} onClick={this.addFile}><DiffOutlined />添加</Button>
                    {/*点击添加按钮进行文件的添加 */}
                    <Modal title="添加文件" visible={this.state.isModalVisbale} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <Form {...layout} name="basicForm" >
                            <Form.Item
                                name="group"
                                label="文件标题"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='请输入文件标题' />
                            </Form.Item>
                            <Form.Item
                                name="group"
                                label="文件编码"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder='请输入文件编码' />
                            </Form.Item>
                            <Form.Item
                                name="group"
                                label="文件描述"
                            >
                                <TextArea placeholder='请输入文件描述' />
                            </Form.Item>
                            <Form.Item
                                name="group"
                                label="上传附件"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='file' />
                            </Form.Item>
                            <span style={{ color: 'gray', float: 'right' }}>支持格式：.rar .zip .doc .docx .pdf .单个文件不能超过20MB</span>
                        </Form>
                    </Modal>
                    <Button style={{ marginRight: 40 }}><DownloadOutlined />下载</Button>
                    <Button style={{ marginRight: 40 }}><FileOutlined />重命名</Button>
                    <Button style={{ marginRight: 40 }}><DeleteOutlined />删除</Button>
                    <Button style={{ marginRight: 40 }}><CopyOutlined />复制外链</Button>
                    <Radio.Group defaultValue="默认排序" style={{ float: 'right' }} >
                        <Radio.Button value="默认排序" >默认排序</Radio.Button>
                        <Radio.Button value="按时间排序" >按时间排序</Radio.Button>
                    </Radio.Group>
                </div>
                <Card style={{ marginTop: 40 }}>
                    <FileList />
                    <br />
                    <br />
                    <Pagination defaultCurrent={1} total={50} style={{ textAlign: 'center' }} />
                </Card>

            </div>
        )
    }
}
