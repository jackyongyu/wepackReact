import React from 'react';
import { routerRedux, Route,Router , Switch } from 'dva/router';
import Total from '../pages/index';
import Search from '../pages/components/search/index';
 
const { ConnectedRouter } = routerRedux;
function RouterConfig({ history,app  }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Total} />
        <Route path="/search" component={Search}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;