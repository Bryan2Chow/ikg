import React, { Component } from 'react';
import { Checkbox, Image } from 'antd';

var Filetotal = [
    <Checkbox key="1" value="A" ><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="2" value="B"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="3" value="C"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="4" value="D"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="5" value="E"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="6" value="C"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="7" value="D"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
    <Checkbox key="8" value="E"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>,
]
var selectedfile = [];
selectedfile = Filetotal.slice(0, 5)
export default class FileList extends Component {

    render() {
        return (
            <div>
                <Checkbox.Group style={{ textAlign: 'center', width: '100%' }}>
                    {
                        selectedfile.map(file => {
                            return (
                                file
                                // console.log(1)
                                // <Checkbox ><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>
                            )
                        })

                    }
                    {/* {
                        <div>
                            <Checkbox value="A" ><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>
                            <Checkbox value="B"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>
                            <Checkbox value="C"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>
                            <Checkbox value="D"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>
                            <Checkbox value="E"><Image style={{ height: "300px", paddingTop: "35px", paddingBottom: "35px" }} src={require("../img/1.png")}></Image></Checkbox>
                        </div>

                    } */}
                    {/* {selectedfile} */}
                </Checkbox.Group>
            </div>
        )
    }
}
