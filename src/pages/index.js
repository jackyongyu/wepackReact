import React,{Component} from 'react';
import Header from './components/header';
import Swipe from './components/swipe';
import ExhibitionListCont from './components/List'
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
            </div>
             
            )
    }
}




