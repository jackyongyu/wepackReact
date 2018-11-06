import * as 自定义名 from '../services/service';

export default {
  namespace: '第一步中的namespace',

  state: {
    data: ''   //reducers中接收数据
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {

    *供组件调用的方法名({ payload: { 参数 }}, { call, put }) {

      const result = yield call(自定义名.service中的方法名, 参数);//如果使用  {参数}  ，则是一个对象

      //把请求的数据保存起来
      //数据更新会带动页面重新渲染
      yield put({
        type: 'save',  //reducers中的方法名
        payload:{
          data: result.data  //网络返回的要保留的数据
        }
      })
    }
  },

  reducers: {
     save(state, { payload: { data } }) {
       return {
         ...state, 
          data: data  //第一个data是state的，第二个data是payload的
      };
     },
  },
}
