import React, { Component } from 'react';
import './header.less';
import '../../static/style.css';
import { connect } from 'dva';
import { Link } from 'dva/router';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        const { dispatch, type, action } = this.props;
        if (action) {
            dispatch({
                type,
            })
        }
    }


    render() {
        const { data } = this.props;
        const { action } = this.props;
        return (
            <div id="home-header" className="clear-fix">
                {action ?
                    <div className="home-header-left float-left">
                        <span>{data ? data.CityName : ''}</span>&nbsp;
                   <i className="icon-chevron-down"></i>
                    </div>
                    :
                    <div className={action ? "home-header-left float-left" : "home-header-left float-left add-left"}>
                        <Link to= {`/`}><i className="icon-chevron-left"></i></Link>
                    </div>
                }
                {action ? <div className="home-header-right float-right">
                    <i className="icon-person"></i>
                </div>
                    : ""}
                <div className={action ? "home-header-middle" : "home-header-middle add-middle"}>
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"></input>
                    </div>
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


export default connect(mapStateToProps)(Header);

/*dispatch 是一个函数方法，用来将 Action 发送给 Model 中的State。
dispatch方法从哪里来？被 connect 的 Component 会自动在 Props 中拥有 dispatch 方法。*/






