import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router'
import { Home } from './assembly'

export default function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
        <Switch>
          <Route path="/home"  component={Home} />
          <Route path="/"  component={Home} />
        </Switch>
    </Router>
  );
}


