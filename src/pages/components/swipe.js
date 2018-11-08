import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'dva';
import './swipe.less';

class Swipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
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
        const { data } = this.props;
        const opt = {
            auto: 3000,
            callback: ((index) => {
                this.setState({
                    index
                })
            }).bind(this),
        }
        console.log(data);
        return (
            <div>
                <ReactSwipe className="carosel" swipeOptions={opt}>
                    {/* {ImgUrl !== 'undinfind' ? ImgUrl.forEach(key =>
                        <div>key</div>) : null
                    } */}
                    <div>page1</div>
                    <div>page2</div>
                    {/* <div>page3</div> */}
                </ReactSwipe>
                <div className="pointContent">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ""}></li>
                        <li className={this.state.index === 1 ? "selected" : ""}></li>
                        {/* <li className={this.state.index === 2 ? "selected" : ""}></li> */}
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
