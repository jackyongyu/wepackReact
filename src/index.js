import React from 'react';
import dva from 'dva';
import Header from './components/js/index';
// 创建应用
const app = dva();
// 注册视图
app.router(() => <Header />);
// 启动应用
app.start('#root');



