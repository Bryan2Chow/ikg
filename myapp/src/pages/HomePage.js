import React, { Component } from 'react';
import { Carousel } from 'antd';
// import '../bootstrap/css/bootstrap.css'

const contentStyle = {
    width: "90%",
    height: '260px',
    color: 'white',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
    margin: 'auto'

};

export default class HomePage extends Component {
    render() {
        return (
            <div style={{ marginTop: 10, height: "100%" }}>

                <div className="jumbotron" style={{
                    width: '90%',
                    height: "20%",
                    backgroundColor: "#364d79",
                    padding: 30,
                    color: 'white',
                    margin: 'auto'
                }}>
                    <h2 style={{ color: 'white' }}>欢迎访问薄壁壳体加工质量知识图谱管理与应用原型系统！</h2><br />
                    <p>本平台基于Neo4j进行图数据库的存储，通过python的Flask进行后端请求处理，
                        使用bootstrap和ant design结合react框架进行前端展示。目前完成功能有基于Neo4图数据库的数据查询，
                        并将查询到的动态数据即时返回到前端页面进行结构化的展示。通过Echarts进行图数据库中图结构形式的查询结果展示，
                        使得查询结果更加直观一目了然。</p>
                </div>

                <Carousel autoplay style={{ marginTop: 40, color: 'red' }}>
                    <div >
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

                <div style={{ textAlign: 'center', height: "8%", marginTop: 20 }}>
                    <div style={{ marginRight: 100, padding: 10, display: "inline-block", backgroundColor: "#364d79" }}>
                        <h3 style={{ color: 'white' }}>实体数量： 45</h3>
                    </div>
                    <div style={{ marginLeft: 100, padding: 10, display: "inline-block", backgroundColor: "#364d79" }}>
                        <h3 style={{ color: 'white' }}>关系数量： 56</h3>
                    </div>
                </div>

                <hr style={{ marginTop: 15 }} />
                <div style={{ textAlign: "center", position: "relative" }}><b>Powered by 薄壁壳体加工质量知识图谱管理与应用原型系统 | Copyright © 2020-2022 Institute of Intelligent Manufacturing@ Donghua University All Rights Reserved</b></div>
            </div >
        )
    }
}
