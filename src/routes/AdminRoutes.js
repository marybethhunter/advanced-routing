import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Edit from '../views/Edit';
import Create from '../views/Create';

export default function AdminRoutes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/edit/:key" component={Edit} />
        <Route exact path="/create" component={() => <Create user={user} />} />
      </Switch>
    </div>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
