import React, { Component } from 'react';
import '../header.less'
import './list.less';
import cookie from 'react-cookie';

if (process.env.NODE_ENV === 'development') {
    require('../../../../mock/todoList')
    }
    let token = cookie.load('token');
    let postApi = (path, mock) => {
    return path + (mock ? '' : '.mock') + '?token=' + token;
    };
    const mockTodo={
        "newsList":postApi("/api/order/news"),
        "newsList2":postApi("/api/newsList2"),
        "todoList":postApi("/todoList", 0)
    }
export default class ExhibitionList extends React.Component {

 

    render() {
        return (
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">
                    <img />{mockTodo}
                </div>
                <div className="item-content">
                    <div className="item-title-container">
                        <h3 className="float-left">辣条</h3>
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