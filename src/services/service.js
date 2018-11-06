import request from '../utils/request';

// export function models中要调用的方法名 (参数) {
  export function getUser (prames) {
  // return request(`接口地址?${参数}`) //get方法请求
  return request(`http://yapi.cnabc-inc.com/mock/80/getUserInfor/get/v1?${prames}`)
    /*
   return request(`接口地址`,{
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      参数名：参数
    })
  })
  */
}
