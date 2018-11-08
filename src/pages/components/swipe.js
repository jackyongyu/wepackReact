import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'dva';
import './swipe.less';

class Swipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0,
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: "setting/getImgObj",
        })
    }

    render() {
        const {data} = this.props;
        const opt = {
            auto: 3000,
            callback: ((index) => {
                this.setState({
                    index
                })
            }).bind(this),
        }
        const obj=(obj)=>{
            return Object.keys(obj).map(key =><li className="liStyle" key={key}><img src={obj[key]}/></li>)
        }
        return (
            <div style={{background:'#fff'}}>
                <ReactSwipe className="carosel" swipeOptions={opt}> 
                    <div>{data.urlImg?obj(data.urlImg[0]):''}</div>
                    <div>{data.urlImg?obj(data.urlImg[1]):''}</div>
                    <div>{data.urlImg?obj(data.urlImg[2]):''}</div>
                </ReactSwipe>
                <div className="pointContent">
                    <ul>
                        {data.urlImg?Object.keys(data.urlImg).map(key =>
                        <li  className={ key == this.state.index ? "selected" : ""} key={key}></li>
                        ):''}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.setting.data,
    };
};


export default connect(mapStateToProps)(Swipe);
