import React, { Component } from "react";
import { Col, Row, Image } from "antd";
import '../style/style.css'

class MangementProduction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div>
        <br/>
        <br/>
        <Row style={{textAlign:"center",fontSize:"20px"}}>
        <Col
          xs={{
            span: 5,
            offset: 1,
          }}
          lg={{
            span: 6,
            offset: 2,
          }}
          
        >
          <Image preview={false} src={require("../img/PDM.png")} alt="哈哈哈哈" />
          <br />
          <br />
          <a href="http://127.0.0.1:8080/149Platform/pdm/login.html" className="FakeBtn">PDM</a>
        </Col>
        <Col
          xs={{
            span: 11,
            offset: 1,
          }}
          lg={{
            span: 6,
            offset: 2,
          }}
        >
          <Image preview={false} src={require("../img/ERP.png")} />
          <br />
          <br />
          <a href="http://127.0.0.1:8080/149Platform/erp/login.html" className="FakeBtn">ERP系统</a>
        </Col>
        <Col
          xs={{
            span: 5,
            offset: 1,
          }}
          lg={{
            span: 6,
            offset: 2,
          }}
        >
          <Image preview={false} src={require("../img/MES.png")} />
          <br />
          <br />
          <a href="http://127.0.0.1:8080/149Platform/mes/login.html" className="FakeBtn">MES系统</a>
        </Col>
      </Row>
      </div>
    );
  }
}

export default MangementProduction;
