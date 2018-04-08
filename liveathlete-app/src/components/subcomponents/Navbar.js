//components/Navbar.js

import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import Login from "../Login";
import Logout from "../Logout";
import { loginUser, logoutUser } from "../../actions/actions";

export default class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.example.com">
            Quotes App
          </a>
          <div className="navbar-form">
            {!isAuthenticated && (
              <Login
                errorMessage={errorMessage}
                onLoginClick={creds => dispatch(loginUser(creds))}
              />
            )}

            {isAuthenticated && (
              <Logout onLogoutClick={() => dispatch(logoutUser())} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};
