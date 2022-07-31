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
                <div style={{ width: "49%", height: '100%' }}>
                    <div style={{ height: "13%" }}>
                        <Input type='file' style={{ width: '19%', marginRight: 30, border: 'none', bcgcol: "#fff" }} onChange={this.addUrl} />
                        <Button style={{ marginRight: 30 }}>表格检测</Button>
                        <Button >表格信息识别</Button>
                        <h2 style={{ marginTop: 20 }}>| 文档预览</h2>
                    </div>
                    <Card style={{ height: "88%", overflow: 'scroll', textAlign: 'center' }}>
                        <img id="preview" style={{ width: '100%', marginTop: '80px' }}></img>
                    </Card>
                </div>
                <div style={{ width: "49%", height: '100%' }}>
                    <div style={{ height: "61%" }}>
                        <h3 style={{ marginLeft: 20 }}>| 表格检测</h3>
                        <Card style={{ height: "100%", overflow: "scroll", textAlign: 'center' }}>
                            <img style={{ width: '85%', }} src={require("./img/FinishDetectived.png")}></img>
                        </Card>
                    </div>
                    <br />
                    <br />
                    <div style={{ height: "25%" }}>
                        <h3 style={{ marginLeft: 20 }}>| 表格信息识别</h3>
                        <TextArea style={{ height: "100%" }}></TextArea>

                    </div>
                    <br />
                    <Button type="primary" style={{ marginTop: 19 }}>下载文件</Button>&nbsp;&nbsp;
                    <span>支持CSV、TXT、JSON等格式</span>
                </div>
            </div>
        )
    }
}
