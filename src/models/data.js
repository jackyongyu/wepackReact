// import * as 自定义名 from '../services/service';
import * as Shit from '../services/service';
export default {
  namespace: 'setting',

  state: {
    data: ''   //reducers中接收数据
  },

//   subscriptions: {
//     setup({ dispatch, history }) {  // eslint-disable-line
//     },
//   },

  effects: {
    // *供组件调用的方法名({ payload: { 参数 }}, { call, put }) {
    *getUserInfor({}, { call, put }) {
    //   const result = yield call(自定义名.service中的方法名, 参数);//如果使用  {参数}  ，则是一个对象
        const result = yield call(Shit.getUser, {});
      //把请求的数据保存起来
      //数据更新会带动页面重新渲染
        yield put({
            type: 'save',  //reducers中的方法名
            payload:{
            data: result.data.data  //网络返回的要保留的数据
            }
        })
    },
     *getImgObj({}, { call, put }) {
       const result = yield call (Shit.getImgUrl,{})
       yield put({
         type:'save',
         payload:{
          data: result.data.data  //网络返回的要保留的数据
          }
       })
      //  console.log(result.data);
       
     }

  },

  reducers: {
     save(state, { payload: { data } }) {
     let dataAssign = Object.assign({}, data);
     console.log( data);
       return {
         ...state, 
          data:dataAssign,  //第一个data是state的，第二个data是payload的
      };
     },

  },
  
}



