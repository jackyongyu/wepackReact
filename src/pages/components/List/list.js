import React, { Component } from 'react';
import '../header.less';
import './list.less';


export default class ExhibitionList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            first:'',
            middle:'',
            last:'',
            full:''
        }
    }


componentDidMount(){

}

    render() {
        return (
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">
                    <img />
                </div>
                <div className="item-content">
                    <div className="item-title-container">
                        <h3 className="float-left">辣条好味道</h3>
                        <span className="float-right">12m</span>
                    </div>
                    <p className="item-sub-title">中国</p>
                    <div className="item-price-container">
                        <span className="price float-left">￥12</span>
                        <span className="number float-right">已售</span>
                    </div>
                </div>
            </div>
        )
    }
}