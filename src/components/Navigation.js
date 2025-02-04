import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signOutUser } from '../api/auth';

function Navigation({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Advanced Routing
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  All Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/create">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
            {user ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={signOutUser}
              >
                Sign Out!
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  user: null,
};

export default Navigation;
