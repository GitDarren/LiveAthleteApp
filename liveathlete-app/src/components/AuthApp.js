//containers/App.js

import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6

import { connect } from "react-redux";
import { loginUser, fetchQuote, fetchSecretQuote } from "../actions/actions";
import Login from "../components/Login";
import Navbar from "./subcomponents/Navbar";
import Quotes from "../components/Quotes";

class App extends Component {
  render() {
    const {
      dispatch,
      quote,
      isAuthenticated,
      errorMessage,
      isSecretQuote
    } = this.props;

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className="container">
          <Quotes
            onQuoteClick={() => dispatch(fetchQuote())}
            onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
            isAuthenticated={isAuthenticated}
            quote={quote}
            isSecretQuote={isSecretQuote}
          />
        </div>
      </div>
    );
  }
}

App.PropTypes = {
  dispatch: PropTypes.string,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
};

//These props come from the applications's
//state when it is started

function mapStateToProps(state) {
  const { quotes, auth } = state;
  const { quote, authenticated } = quotes;
  const { isAuthenticated, errorMessage } = auth;

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  };
}

export default connect(mapStateToProps)(App);