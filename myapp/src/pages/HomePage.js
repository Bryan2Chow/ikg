import React, { Component } from 'react';
import { Carousel } from 'antd';
// import '../bootstrap/css/bootstrap.css'

const contentStyle = {
    width: "100%",
    height: '150px',
    color: 'black',
    // lineHeight: '200px',
    textAlign: 'center',
    background: 'rgb(242,242,242)',
    margin: '150px auto 0'



};
const contentStyle2 = {
    width: "90%",
    height: '40%',
    backgroundColor: "rgb(242,242,242)",
    margin: "auto",


};

export default class HomePage extends Component {
    state = {
        EntityNumbers: 25626,
        RealtionNumbers: 54039
    }
    render() {
        return (
            <div style={{ height: "100%" }}>

                <div className="jumbotron" style={{
                    width: '90%',
                    height: "30%",
                    backgroundColor: "rgb(242,242,242)",
                    padding: 30,
                    color: 'black',
                    margin: 'auto'
                }}>
                    <h2 >欢迎访问薄壁壳体加工质量知识图谱管理与应用原型系统！</h2>
                    <h3>本平台基于Neo4j进行图数据库的存储，通过python的Flask进行后端请求处理，
                        使用bootstrap和ant design结合react框架进行前端展示。目前完成功能有基于Neo4图数据库的数据查询，
                        并将查询到的动态数据即时返回到前端页面进行结构化的展示。通过Echarts进行图数据库中图结构形式的查询结果展示，
                        使得查询结果更加直观一目了然。</h3>
                </div>

                <div className="zhangfei" style={contentStyle2}>


                    <Carousel autoplay style={{ marginTop: 30, height: "100%" }} dotPosition='top'>

                        <div>
                            <h3 style={contentStyle}>文档管理主要记录工艺文档、检测报告、产品点检记录、质量追溯与维护报告，以及中间产品探伤图像、缺陷图像、质量缺陷因果信息等</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>5</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>6</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>7</h3>
                        </div>
                    </Carousel>
                </div >
                <br />

                <div style={{ textAlign: 'center', height: "10%", marginTop: 38, display: "flex", justifyContent: 'space-around', alignItems: 'center', marginBottom: 40 }}>
                    <div style={{ padding: 10, backgroundColor: "rgb(242,242,242)" }}>
                        <h3 style={{ color: 'black' }}>实体数量： {this.state.EntityNumbers}</h3>
                    </div>
                    <div style={{ padding: 10, backgroundColor: "rgb(242,242,242)" }}>
                        <h3 style={{ color: 'black' }}>关系数量： {this.state.RealtionNumbers}</h3>
                    </div>
                    <div style={{ padding: 10, backgroundColor: "rgb(242,242,242)" }}>
                        <h3 style={{ color: 'black' }}>三元组的数量： {510352}</h3>
                    </div>
                </div>

                <footer style={{ height: "20%", textAlign: 'center', overflow: 'hidden' }} >
                    <hr style={{}} />
                    <div style={{ textAlign: "center", position: "relative" }}><b style={{ fontSize: "12px" }}>Powered by 薄壁壳体加工质量知识图谱管理与应用原型系统 | Copyright © 2020-2022 Institute of Intelligent Manufacturing@ Donghua University All Rights Reserved</b></div>
                </footer>

            </div >
        )
    }
}
