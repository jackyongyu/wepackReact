import React, { Component } from 'react';
import './index.less';
import '../../static/style.css';
import { connect } from 'dva';

class Headers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type:"setting/getUserInfor",
            payload: {//可以不填
                id:123,
              }
        })
    }

    render() {
        console.log(this.props)
        return (
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
        )
    }
}

const mapStateToProps = (state,ownProps) => {  //见名知意，把state转换为props
    //可以打印state看看数据结构，然后放到data里
    console.log(state)
    return {
      data:state.data,
    //   active: ownProps.filter === state.visibilityFilter,
    //   todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
  };

const Header= connect(mapStateToProps)(Headers);
  export default Header;

/*dispatch 是一个函数方法，用来将 Action 发送给 Model 中的State。
dispatch方法从哪里来？被 connect 的 Component 会自动在 Props 中拥有 dispatch 方法。*/






