import React, { Component } from 'react';
import { Checkbox, Image } from 'antd';


var selectedfile = [];
export default class FileList extends Component {

    CheckChange = (checkedValues) => {
        console.log(checkedValues);
    }
    render() {
        const { processingData, DetectiveImg, processingDataState, DetectiveImgState, pages } = this.props.DataInfo
        if (processingDataState) {
            // console.log(processingData);
            selectedfile = processingData.slice(4 * pages - 4, 4 * pages)
        }
        if (DetectiveImgState) {
            selectedfile = DetectiveImg.slice(4 * pages - 4, 4 * pages)
        }
        return (
            <div style={{ width: "100%" }}>

                {/* <Checkbox.Group style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-around' }} onChange={this.CheckChange}>
                    {
                        selectedfile.map((file, index) => {
                            return (
                                <div style={{}} key={index}>
                                    < Checkbox value={index}>
                                        <Image style={{ height: "400px", paddingTop: "35px", paddingBottom: "35px" }} src={require('../img/1.png')}></Image>
                                    </Checkbox>
                                    <h2>{index}</h2>
                                </div>
                            )
                        })

                    }
                </Checkbox.Group> */}
                <Checkbox.Group style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-around' }} onChange={this.CheckChange}>
                    {/* <div>
                        < Checkbox>
                            <Image style={{ height: "400px", paddingTop: "35px", paddingBottom: "35px" }} src={require('../img/产品质量调查单_00.jpg')}></Image>
                        </Checkbox>
                        <h2>{'产品质量调查单'}</h2>
                    </div> */}
                    <div>

                        <Image style={{ height: "440px", paddingTop: "35px", paddingBottom: "35px" }} src={require('../img/电子束焊接过程质量控制措施 1_00.jpg')}></Image>

                        <h2>{'电子束焊接过程质量控制措施'}</h2>
                    </div>
                    <div>

                        <Image style={{ height: "440px", paddingTop: "35px", paddingBottom: "35px" }} src={require('../img/焊接件缺陷检验1_00.jpg')}></Image>

                        <h2>{'焊接件缺陷检验'}</h2>
                    </div>
                    <div>

                        <Image style={{ height: "440px", paddingTop: "35px", paddingBottom: "35px" }} src={require('../img/加工过程质量控制措施_00.jpg')}></Image>

                        <h2>{'加工过程质量控制措施'}</h2>
                    </div>
                </Checkbox.Group>
            </div >
        )
    }


}
