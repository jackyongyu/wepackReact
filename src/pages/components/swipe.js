import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import { connect } from 'dva';
import './swipe.less';

class Swipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: "setting/getImgObj",
        })
    }

    render() {
        const {data}=this.props;
        console.log(data);
        const opt = {   
            auto: 3000,
            callback: ((index) => {
                this.setState({
                    index
                })
            }).bind(this),
        }
        return (
            <div>
                <ReactSwipe className="carosel" swipeOptions={opt}>
                    <div>page1</div>
                    <div>page2</div>
                    <div>page3</div>
                </ReactSwipe>
                <div className="pointContent">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ""}></li>
                        <li className={this.state.index === 1 ? "selected" : ""}></li>
                        <li className={this.state.index === 2 ? "selected" : ""}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //见名知意，把state转换为props
    //可以打印state看看数据结构，然后放到data里
    console.log(state);
    return {
        data: state.setting.data,
    };
};


export default connect(mapStateToProps)(Swipe);
