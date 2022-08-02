import React, { Component } from 'react';
import { Card } from 'antd';
import './style/style.css';

export default class About extends Component {
    render() {
        return (
            <div className="About" >
                <h2 style={{}}>关于我们</h2>
                <h3>|  团队介绍</h3>
                <Card className="ContentShow">
                    <h2 >东华大学机械工程学院智能制造研究所</h2>
                    <h2 >所长：鲍劲松</h2>
                    <h2 >课题组简介：
                        <a
                            href='https://meccol.dhu.edu.cn/30/b0/c9144a143536/page.htm'
                            target={'_blank'}
                            rel="noreferrer">
                            https://meccol.dhu.edu.cn/30/b0/c9144a143536/page.htm
                        </a>
                    </h2>
                    <h2>开源知识图谱贡献者所在组：知识智能组</h2>
                    <h2 >开源项目： https://github.com/Bryan2Chow/ikg</h2>
                </Card>
            </div>
        )
    }

}
