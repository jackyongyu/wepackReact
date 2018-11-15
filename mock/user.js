const { delay } = require('lodash');
const imglist = require('./data/imglist');
const accout=require('./data/accout')
const ListData=require('./data/listData')
function delaySend(data) {
  return (req, res) => delay(() => res.json(data), 1000);
}

function deleySendAccount(data){
  return (req, res) =>{
    const { password, username } = req.body;
        if (password === '888888' && username === 'admin') {
              delay(() => res.json(data), 1000)
        }
  } 
}
const proxy = {
  'GET /api/imgList': delaySend(imglist),
  'POST /api/login/account':deleySendAccount(accout),
  'GET /api/listDataMsg':delaySend(ListData),
}

  module.exports = proxy;