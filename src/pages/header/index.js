import React,{Component} from 'react';
import './index.less' ;
import '../../static/style.css';
import { connect } from 'dva';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
   
   componentDidMount(){
       const {dispatch} = this.props;
    // dispatch({
    //     type: 'getUser',
    //   })
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

function mapStateToProps(state) {
    return { todos: state.todos };
  }
  connect(mapStateToProps)(Header);








