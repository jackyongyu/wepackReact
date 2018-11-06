import React,{Component} from 'react';
import './index.less' ;
import '../../static/style.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
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
                       <input type="text" placeholder="请输入关键字"></input>
                    </div>
                 </div>
             </div>
            )
    }
}