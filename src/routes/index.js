import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';

export default function Routes({ user }) {
  return (
    <>
      {user?.isAdmin && <AdminRoutes user={user} />}
      <AuthenticatedRoutes user={user} />
      <UnauthenticatedRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
