import React, { Component } from 'react';
import { Button, Card, Image, Input } from 'antd';

const { TextArea } = Input
export default class FileAnalyze extends Component {

    addUrl = (e) => {
        console.log(e);
        // 获取图片的url
        var imgObj = document.getElementById("preview")
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = function () {
            console.log(this.result)
            imgObj.src = this.result
        }
    }
    render() {
        return (
            <div style={{ margin: 'auto', height: '100%', display: 'flex', justifyContent: "space-around" }}>
                <div style={{ width: "45%", height: '100%' }}>
                    <div style={{ height: "25%" }}>
                        <Input type='file' style={{ width: '20%', marginRight: 30 }} onChange={this.addUrl} />
                        <Button style={{ marginRight: 30 }}>表格检测</Button>
                        <Button >表格信息识别</Button>
                        <h2 style={{ marginTop: 20 }}>| 文档预览</h2>
                        <h3 style={{ marginLeft: 10 }}>| 输入图片</h3>
                    </div>
                    <Card style={{ height: "75%" }}>
                        <img id="preview" style={{ width: '85%' }}></img>
                    </Card>
                </div>
                <div style={{ width: "45%", height: '100%' }}>
                    <div style={{ height: "30%" }}>
                        <h3 style={{ marginLeft: 20 }}>| 表格检测</h3>
                        <TextArea style={{ height: "100%" }}></TextArea>
                    </div>
                    <br />
                    <br />
                    <div style={{ height: "50%" }}>
                        <h3 style={{ marginLeft: 20 }}>| 表格信息识别</h3>
                        <TextArea style={{ height: "100%" }}></TextArea>

                    </div>
                    <br />
                    <br />
                    <Button type="primary" style={{ marginTop: 20 }}>下载文件</Button>&nbsp;&nbsp;
                    <span>支持CSV、TXT、JSON等格式</span>
                </div>
            </div>
        )
    }
}
