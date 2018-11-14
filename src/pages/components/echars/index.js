import React, { Component } from 'react';
import { Tag, DatePicker,Badge  } from 'antd';
import moment from 'moment';
import './index.less'
const echarts = require("echarts");
require('echarts/chart/bar');
// const monthFormat = 'YYYY/MM';
export default class Echarts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            
        }
    }

    componentDidMount() {
        // 绘制图表
        // const colors = ['#5793f3', '#d14a61'];
        // const option = {
        //     title : {
        //         text: '某地区蒸发量和降水量',
        //     },
        // color: colors,
        //     tooltip: {
        //         trigger: 'axis'
        //     },
        //     legend: {
        //         data: ['蒸发量', '降水量']
        //     },
        //     toolbox: {
        //         show: true,
        //         feature: {
        //             mark: {
        //                 show: true
        //             },
        //             dataView: {
        //                 show: true,
        //                 readOnly: false
        //             },
        //             magicType: {
        //                 show: true,
        //                 type: ['line', 'bar']
        //             },
        //             restore: {
        //                 show: true
        //             },
        //             saveAsImage: {
        //                 show: true
        //             }
        //         }
        //     },
        //     calculable: true,
        //     xAxis: [{
        //         type: 'category',
        //         data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        //     }],
        //     yAxis: [{
        //         type: 'value',
        //         splitArea: {
        //             show: false
        //         },
        //         axisLine: {
        //             lineStyle: {
        //                 color: colors[0]
        //             }
        //         },
        //     }],
        //     series: [{
        //         name: '蒸发量',
        //         type: 'bar',
        //         data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        //     }, {
        //         name: '降水量',
        //         type: 'bar',
        //         data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        //     }]
        // };
        // var myChart = echarts.init(document.getElementById('main'));
        // window.onresize = myChart.resize;
        // myChart.setOption(option);
    }

    render() {
        const {  RangePicker } = DatePicker;
        const dateFormat = 'YYYY/MM/DD';
        return (
            <div>
                <div>
                    <RangePicker
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format={dateFormat}
                    />
                    <span className='time'>本周</span><span className='time'>本月</span><span className='time'>本年</span>
                </div>
                <div style={{ display: 'flex' }}>
                    {/* <div id="main" style={{ width: '80%', height: 400 }}></div>
                    <div style={{ width: '20%' }}>
                        <ul>
                            <li style={{ padding: '10px 5px' }}>
                                 <Badge count={0} showZero/>
                                <span style={{ marginLeft: '20px' }}>汪刚木工板</span>
                                <span style={{ float: 'right', marginRight: '10px' }}>616小时</span>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        )
    }

}

































