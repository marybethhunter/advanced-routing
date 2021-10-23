import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Edit from '../views/Edit';
import Home from '../views/Home';
import Create from '../views/Create';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit/:key" component={Edit} />
      </Switch>
    </div>
  );
}
