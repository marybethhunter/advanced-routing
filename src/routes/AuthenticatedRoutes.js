import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  if (user === null) return user;

  const routeChecker = (burrito) => (user?.isAdmin ? (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...burrito} user={user} />
  ) : (
    <Redirect
      to={{ pathname: '/sign-in', state: { from: burrito.location } }}
    />
  ));
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

PrivateRoute.defaultProps = {
  user: null,
};

export default function AuthenticatedRoutes({ user }) {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={() => <Home user={user} />} />
      </Switch>
    </div>
  );
}

AuthenticatedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AuthenticatedRoutes.defaultProps = {
  user: null,
};
