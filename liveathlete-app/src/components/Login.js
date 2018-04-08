//components/Login.js

import React, { Component, PropTypes } from "react";

export default class Login extends Component {
  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        <input
          type="text"
          ref="username"
          className="form-control"
          style
          placeholder="Username"
        />
        <input
          type="password"
          ref="password"
          clasName="form-control"
          style
          placeholder="Password"
        />
        <button
          onClick={event => this.handleClick(event)}
          classname="btn btn-primary"
        >
          Login{" "}
        </button>

        {errorMessage && <p style> {errorMesage} </p> //This may cause an error as Auth0 sample was <p style=>{errorMessage}</p>
        }
      </div>
    );
  }

  handleClick(event) {
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = {
      username: username.value.trim(),
      password: password.value.trim()
    };
    this.props.onLoginClick(creds);
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
