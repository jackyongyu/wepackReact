const { delay } = require('lodash');
const imglist = require('./data/imglist');
const accout=require('./data/accout')
const ListData=reqire('./data/listData')
function delaySend(data) {
  console.log(1);
  
  return (req, res) => delay(() => res.json(data), 1000);
}

function deleySendAccount(data){
  return (req, res) =>{
    const { password, username } = req.body;
        if (password === '888888' && username === 'admin') {
              delay(() => res.json(data), 1000)
        }
  } ;
}
const proxy = {
  'GET /api/imgList': delaySend(imglist),
  // 'GET /api/ListData': delaySend(ListData),
  'POST /api/login/account':deleySendAccount(accout),
}

  module.exports = proxy;