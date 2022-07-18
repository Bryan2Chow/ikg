import React, { Component } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'
import { UserOutlined, CaretDownOutlined, LineChartOutlined, HomeOutlined, DeploymentUnitOutlined, BarsOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Space } from 'antd';
import HomePage from '../pages/HomePage';
import FileOrgnize from '../pages/FileOrgnize';
import FileAnalyze from '../pages/FileAnalyze';
import About from '../pages/About';
import QualityKnowledgeExtract from '../pages/QualityKnowledgeExtract';
import QualityReasoningQuestion from '../pages/QualityReasoningQuestion';
import QualtiyDatum from '../pages/QualtiyDatum';

const { Header, Content, Sider } = Layout;
export default class NavBar extends Component {

    render() {
        return (
            <Layout style={{ width: '100%', position: 'fixed' }}>
                {/* 标题头 */}
                <Header className="header" style={{ color: 'skyblue' }}>
                    <div>
                        <h1 style={{ color: 'white', float: 'left ' }}>薄壁壳体加工质量知识图管理与应用原型系统</h1>
                        <div style={{ float: 'right' }}>
                            <Avatar size='large' icon={<UserOutlined />} />&nbsp;&nbsp;
                            <Space>
                                dhu-KGadmin
                            </Space>
                            <CaretDownOutlined />&nbsp;&nbsp;
                            注销
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={220} style={{ height: 1000 }} className="site-layout-background">
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['/HomePage']}
                            items={
                                [
                                    {
                                        key: '/HomePage',
                                        icon: <HomeOutlined />,
                                        label: <Link className="list-group-item" to="/HomePage">系统首页</Link>,
                                    },
                                    {
                                        key: '/FileOrgnize',
                                        icon: <BarsOutlined />,
                                        // label: '面向质量的信息集成',
                                        label: <Link className="list-group-item" to="/FileOrgnize">面向质量的信息集成</Link>,
                                        children: [
                                            {
                                                key: '/FileOrgnize/FileManagement',
                                                icon: <UserOutlined />,
                                                label: <Link className="list-group-item" to="/FileOrgnize/FileManagement">文档管理</Link>,
                                            },
                                            {
                                                key: '/FileOrgnize/FileAnalyze',
                                                icon: <LineChartOutlined />,
                                                label: <Link className="list-group-item" to="/FileOrgnize/FileAnalyze">文档分析</Link>,
                                            },
                                            {
                                                key: '/FileOrgnize/MangementProduction',
                                                icon: <UserOutlined />,
                                                label: <Link className="list-group-item" to="/FileOrgnize/MangementProduction">生产系统管理</Link>,
                                            },
                                            {
                                                key: '/FileOrgnize/QualityKnowledgeExtract',
                                                icon: <UserOutlined />,
                                                label: <Link className="list-group-item" to="/FileOrgnize/QualityKnowledgeExtract">质量信息抽取</Link>,
                                            },
                                        ]
                                    },

                                    {
                                        key: '/QualityGraph',
                                        icon: <UserOutlined />,
                                        label: <Link className="list-group-item" to="/QualityGraph">质量知识图谱</Link>,
                                    },
                                    {
                                        key: '/QualtiyDatum',
                                        icon: <UserOutlined />,
                                        label: <Link className="list-group-item" to="/QualtiyDatum">质量知识追溯</Link>,
                                    },
                                    {
                                        key: '/QualityReasoningQuestion',
                                        icon: <UserOutlined />,
                                        label: <Link className="list-group-item" to="/QualityReasoningQuestion">质量推理问答</Link>,
                                    },
                                    {
                                        key: '/About',
                                        icon: <DeploymentUnitOutlined />,
                                        label: <Link className="list-group-item" to="/About">关于</Link>,
                                    },
                                ]}
                        />
                    </Sider>
                    <Layout
                        style={{
                            padding: '0 24px 24px',
                            backgroundColor: "#fff"
                        }}
                    >
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,

                            }}
                        >
                            <Routes>
                                <Route path='/HomePage' element={<HomePage />} />
                                <Route path='/FileOrgnize/FileManagement' element={<FileOrgnize />} />
                                <Route path='/FileOrgnize/FileAnalyze' element={<FileAnalyze />} />
                                <Route path='/About' element={<About />} />
                                <Route path="/FileOrgnize/QualityKnowledgeExtract" element={<QualityKnowledgeExtract />} />
                                <Route path='/QualityReasoningQuestion' element={<QualityReasoningQuestion />} />
                                <Route path='/QualtiyDatum' element={<QualtiyDatum />} />
                                <Route path="/" element={<Navigate to="/HomePage" />} />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
