const app = require('koa')();
const router =require('koa-router')();
const app = new Koa();
 
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});
 
app.listen(3000);