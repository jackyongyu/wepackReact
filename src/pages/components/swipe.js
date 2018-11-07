import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './swipe.less';

export default class Swipe extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            index:'',
        }
    }

    componentDidMount() {
    }

    render() {
        const opt={
            auto:3000,
            callback:((index)=>{
                this.setState({
                    index
                })
            }).bind(this),
        }
        return (
            <div>
                <ReactSwipe className="carosel" swipeOptions={opt}>
                    <div>page1</div>
                    <div>page2</div>
                    <div>page3</div>
                </ReactSwipe>
                <div>
                    {console.log(this.state.index)}
                </div>
            </div>
        )
    }
}