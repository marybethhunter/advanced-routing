import React from 'react';
import Proptypes from 'prop-types';
import { signInUser } from '../api/auth';

export default function SignIn({ user }) {
  return (
    <div>
      {user === null ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <button type="button" onClick={signInUser}>
            SignIn
          </button>
        </div>
      )}
    </div>
  );
}

SignIn.propTypes = {
  user: Proptypes.node,
};

SignIn.defaultProps = {
  user: null,
};
