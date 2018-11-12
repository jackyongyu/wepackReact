import React, { Component } from 'react';
import ExhibitionList from './List/list'
import { connect } from 'dva';

 class ExhibitionListCont extends React.Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({
            type: "setting/getImgList",
        })
    }
    render() {
        const { data } = this.props; 
        const {imglist}=data;
        return (
            <div>
                <h2 style={{margin:'5px 0',paddingLeft:'20px'}}>猜你喜欢</h2>
                <ExhibitionList data={imglist}/>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        data: state.setting.data,
    };
};

export default connect(mapStateToProps)(ExhibitionListCont);









