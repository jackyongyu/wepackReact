import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Total from '../pages/index';
 
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Total} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;