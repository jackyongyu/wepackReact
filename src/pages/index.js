import React,{Component} from 'react';
import Header from './components/header';
import Swipe from './components/swipe';
import ExhibitionListCont from './components/List'
import Echarts from './components/echars/index'
export default class Total extends React.Component {

    render() {
        return ( 
            <div>
                <Header
                   type="setting/getUserInfor"
                   action={true}
                   searchBelong="mainPage"
                />
                <Swipe/>
                <ExhibitionListCont/>
                <Echarts/>
            </div>
             
            )
    }
}




