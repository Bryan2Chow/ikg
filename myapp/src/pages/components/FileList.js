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
                <Checkbox.Group style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-around' }} onChange={this.CheckChange}>
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
                </Checkbox.Group>
            </div >
        )
    }


}
