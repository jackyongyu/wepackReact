import React from 'react';
import dva from 'dva';
import Total from './pages/index';
import './index.less'
// 创建应用
const app = dva();
// 注册视图
app.router(() => <Total />);
// 启动应用
app.start('#root');



