import React,{Component} from 'react';
import Header from './components/header';
import Swipe from './components/swipe';
import ExhibitionListCont from './components/List'
export default class Total extends React.Component {

    render() {
        return ( 
            <div>
                <Header/>
                <Swipe/>
                <ExhibitionListCont/>
            </div>
             
            )
    }
}




