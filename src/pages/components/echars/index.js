import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { Tag, DatePicker,Badge  } from 'antd';
import moment from 'moment';
// const monthFormat = 'YYYY/MM';
export default class Echarts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            
        }
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        window.onresize = myChart.resize;
        myChart.setOption({
            title: { text: '考勤趋势' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
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
                    <span>周</span><span>月</span><span>年</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <div id="main" style={{ width: '80%', height: 400 }}></div>
                    <div style={{ width: '20%' }}>
                        <ul>
                            <li style={{ padding: '10px 5px' }}>
                                 <Badge count={0} showZero/>
                                <span style={{ marginLeft: '20px' }}>汪刚木工板</span>
                                <span style={{ float: 'right', marginRight: '10px' }}>616小时</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

































