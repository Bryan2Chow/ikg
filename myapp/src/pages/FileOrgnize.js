import React, { Component } from 'react';
import { Button, Input, Space, Radio, Pagination, Card, Modal, Form } from 'antd';
import { CopyOutlined, DeleteOutlined, FileOutlined, DownloadOutlined, DiffOutlined } from '@ant-design/icons';
import FileList from './components/FileList';
import './style/FileOrgnize.css'

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
        isModalVisbale: false,
        DataInfo: {
            processingData: [
                1, 2, 3, 4, 5, 6, 7, 15, 14, 13, 17, 18, 19, 10, 32, 24
            ],
            DetectiveImg: [
                1, 2, 3, 4, 5, 6, 7, 15, 14, 13, 17, 18, 19, 10, 32, 24
            ],
            processingDataState: true,
            DetectiveImgState: false,
            pages: 1

        },

    }

    // 加工过程文档和数字化检测图像切换
    ChagngModel = (e) => {
        if (e.target.defaultValue === '加工过程文档') {
            this.setState({
                DataInfo: {
                    ...this.state.DataInfo,
                    processingDataState: true,
                    DetectiveImgState: false,
                    pages: 1
                }

            })
        }
        if (e.target.defaultValue === '数字化检测图像') {
            this.setState({
                DataInfo: {
                    ...this.state.DataInfo,
                    processingDataState: false,
                    DetectiveImgState: true,
                    pages: 1
                }
            })
        }

    }
    // 翻页
    PageValue = (e) => {
        this.setState({
            DataInfo: {
                ...this.state.DataInfo,
                pages: e
            }
        })
    }
    // 搜素功能
    SearchFile = (e) => {
        console.log(e)
    }
    addFile = () => {
        this.setState({
            isModalVisbale: true
        })
    }
    SumbitFile = (e) => {
        console.log(e)
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            // 取消modal的可视化
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
            <div style={{ height: "100%" }} >
                <div style={{ height: "12%" }}>
                    {/* veticalalign为了使得button和space在一跳直线上 */}
                    <Radio.Group defaultValue="加工过程文档" buttonStyle="solid" style={{ verticalAlign: 'middle' }}>
                        <Radio.Button value="加工过程文档" style={{ marginRight: 100 }} onClick={this.ChagngModel}>加工过程文档</Radio.Button>
                        <Radio.Button value="数字化检测图像" style={{ marginRight: 100 }} onClick={this.ChagngModel}>数字化检测图像</Radio.Button>
                    </Radio.Group>
                    <Space style={{ verticalAlign: 'middle' }}>
                        <Search
                            placeholder="输入搜素内容"
                            allowClear
                            enterButton="搜索"
                            // size="large"
                            width="200px"
                            onSearch={this.SearchFile}
                        />
                    </Space>
                </div>
                <div style={{ height: '12% ' }}>
                    <Button style={{ marginRight: 35 }} onClick={this.addFile}><DiffOutlined />添加</Button>
                    {/*点击添加按钮进行文件的添加 */}
                    <Modal title="添加文件" visible={this.state.isModalVisbale} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <Form {...layout} name="basicForm" >
                            <Form.Item
                                name="FileTitle"
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
                                name="FileCode"
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
                                name="FileDescription"
                                label="文件描述"
                            >
                                <TextArea placeholder='请输入文件描述' />
                            </Form.Item>
                            <Form.Item
                                name="UploadFile"
                                label="上传附件"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='file' />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" style={{ verticalAlign: 'middle', marginLeft: 20 }} onClick={this.SumbitFile}>提交</Button>
                            <span style={{ color: 'gray', float: 'left' }}>支持格式：.rar .zip .doc .docx .pdf .单个文件不能超过20MB</span>



                        </Form>

                    </Modal>
                    <Button style={{ marginRight: 35 }}><DownloadOutlined />下载</Button>
                    <Button style={{ marginRight: 35 }}><FileOutlined />重命名</Button>
                    <Button style={{ marginRight: 35 }}><DeleteOutlined />删除</Button>
                    <Button style={{ marginRight: 35 }}><CopyOutlined />复制外链</Button>
                    <Radio.Group defaultValue="35排序" style={{ float: 'right' }} >
                        <Radio.Button value="默认排序" >默认排序</Radio.Button>
                        <Radio.Button value="按时间排序" >按时间排序</Radio.Button>
                    </Radio.Group>
                </div>
                <div style={{ height: "78%", border: '1px solid rgb(242, 242, 242)', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <FileList DataInfo={this.state.DataInfo} />
                    <br />
                    <br />
                    <Pagination
                        current={this.state.DataInfo.pages}
                        // 计算文档总数
                        total={this.state.DataInfo.processingDataState ? this.state.DataInfo.processingData.length : this.state.DataInfo.DetectiveImg.length}
                        // 每一页放置的数目
                        defaultPageSize={5}
                        style={{ textAlign: 'center' }}
                        onChange={this.PageValue}
                    />
                </div>

            </div>
        )
    }
}
