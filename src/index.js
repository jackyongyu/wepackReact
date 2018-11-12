import dva from 'dva';
import {createBrowserHistory as createHistory} from "history";
import './index.less';


// 创建应用
const app = dva({history:createHistory()});
// 注册 Model
app.model(require('./models/data').default);
// 注册视图  
app.router(require('./router/index').default);
// 启动应用
app.start('#root');










