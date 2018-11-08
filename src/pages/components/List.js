import React, { Component } from 'react';
import ExhibitionList from './List/list'

export default class ExhibitionListCont extends React.Component {

    render() {
        return (
            <div>
                <h2 style={{margin:'5px 0',paddingLeft:'20px'}}>猜你喜欢</h2>
                <ExhibitionList/>
            </div>

        )
    }
}











