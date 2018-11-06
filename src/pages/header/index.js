import React, { Component } from 'react';
import './index.less';
import '../../static/style.css';
import { connect } from 'dva';

class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props)
        const { dispatch, count } = this.props;
        return (
            <div>
                <div id="home-header" className="clear-fix">
                    <div className="home-header-left float-left">
                        <span>深圳</span>&nbsp;
                   <i className="icon-chevron-down"></i>
                    </div>
                    <div className="home-header-right float-right">
                        <i className="icon-person"></i>
                    </div>
                    <div className="home-header-middle">
                        <div className="search-container">
                            <i className="icon-search"></i>
                            <input type="text" placeholder="请输入关键字"></input>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div>Highest Record: {count.record}</div>
                    <div>{count.current}</div>
                    <div>
                        <button onClick={() => { dispatch({ type: 'count/add' }); }}>+</button>
                        <button onClick={() => { dispatch({ type: 'count/minus' }); }}>-</button>
                        <button onClick={() => { dispatch({ type: 'count/showPic' }); }}>show</button>
                    </div>
                    {count.show ? <img src="1.jpeg" alt="新垣结衣" /> : null}
                </div> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}
  
const Header = connect(mapStateToProps)(Headers);
export default Header;
/*dispatch 是一个函数方法，用来将 Action 发送给 Model 中的State。
dispatch方法从哪里来？被 connect 的 Component 会自动在 Props 中拥有 dispatch 方法。*/






