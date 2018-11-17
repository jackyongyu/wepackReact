import React from 'react';
import { Table, DatePicker, Badge, LocaleProvider } from 'antd';
import moment from 'moment';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './index.less'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const echarts = require("echarts");
require('echarts/chart/bar');

// const monthFormat = 'YYYY/MM'; hello-world!
export default class Echarts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // 绘制图表
        const colors = ['#5793f3', '#d14a61'];
        const option = {
            title: {
                text: '阶梯瀑布图',
                subtext: 'From ExcelHome',
            },
            color: colors,
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蒸发量', '降水量']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
            }],
            series: [{
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            }, {
                name: '降水量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }]
        };
        var myChart = echarts.init(document.getElementById('main'));
        window.onresize = myChart.resize;
        myChart.setOption(option);
    }

    render() {
        const { RangePicker } = DatePicker;
        const dateFormat = 'YYYY/MM/DD';

        const columns = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key'  
        }, {
            title: '小组名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '出勤天数',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '异常天数',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '出勤工种',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => <span color="blue" key={tag}>{tag}</span>)}
                </span>
            ),
        }, {
            title: '入场时间',
            key: 'time',
            dataIndex: 'time',
            render: text => (
                <span>
                    {text}
                </span>
            ),
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">Invite {record.name}</a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York',
            tags: ['nice', 'developer'],
            time: '1997/10/25',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London ',
            tags: ['loser'],
            time: '1997/1/25',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney',
            tags: ['cool', 'teacher'],
            time: '1997/2/25',
        }];
        const number=[1,2]
        const NumberList= props =>{
            const ListItems = number.map((number) =>
                <li style={{ padding: '10px 5px' }} key={number}>
                    <Badge count={number} showZero />
                    <span style={{ marginLeft: '20px' }}>汪刚木工板</span>
                    <span style={{ float: 'right', marginRight: '10px' }}>{number}小时</span>
                </li>)
                return (<ul style={{ width: '20%' }}>
                            <li>考勤排名</li>
                            {ListItems}
                        </ul>)
        }
       
        return (
            <div>
                <div className="content">
                    <LocaleProvider locale={zh_CN}>
                        <RangePicker
                            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                            format={dateFormat}
                            allowClear={false}
                        />
                    </LocaleProvider>
                    <span className='time'>本周</span><span className='time'>本月</span><span className='time'>本年</span>
                    <div style={{ display: 'flex' }}>
                        <div id="main" style={{ width: '80%', height: 400 }}></div>
                        <NumberList number={number}/>
                    </div>
                </div>
                <div className="content" style={{ marginBottom: '20px' }}>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        )
    }

}

































