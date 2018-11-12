import React from 'react';
import '../header.less';
import './list.less';

export default class ExhibitionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            middle: '',
            last: '',
            full: ''
        }
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                {data && data.map((item,index) => (
                    <div className="list-item clear-fix" key={index}>
                        <div className="item-img-container float-left">
                            <img src={item.url}/>
                        </div>
                        <div className="item-content">
                            <div className="item-title-container">
                                <h3 className="float-left">{item.Listname}</h3>
                                <span className="float-right">{item.distance}</span>
                            </div>
                            <p className="item-sub-title">{item.place}</p>
                            <div className="item-price-container">
                                <span className="price float-left">￥{item.price}</span>
                                <span className="number float-right">{item.status==1?'已售':'未售'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}












