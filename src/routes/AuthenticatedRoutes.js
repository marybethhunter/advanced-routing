import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';

export default function AdminRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
