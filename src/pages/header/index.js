import React, { Component } from 'react';
import './index.less';
import '../../static/style.css';
import { connect  } from 'dva';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {CityName:''};
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type:"setting/getUserInfor",
            payload: {
                id:123,
              }
        })
    }

    render() {
        const {data}=this.props;
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>{data?data.CityName:''}</span>&nbsp;
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

const mapStateToProps = (state) => { 
    //见名知意，把state转换为props
    //可以打印state看看数据结构，然后放到data里
    return {
      data:state.setting.data.data,
    };
  };


  export default connect(mapStateToProps)(Header);

/*dispatch 是一个函数方法，用来将 Action 发送给 Model 中的State。
dispatch方法从哪里来？被 connect 的 Component 会自动在 Props 中拥有 dispatch 方法。*/






