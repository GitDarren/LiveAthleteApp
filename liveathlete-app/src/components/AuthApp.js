import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import { loginUser, fetchQuote, fetchSecretQuote } from "../actions/actions";
import Login from "./Login";
import Navbar from "../components/subcomponents/Navbar";
import Quotes from "./Quotes";

class AuthApp extends Component {
  render() {
    const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
          <Quotes
            onQuoteClick={() => dispatch(fetchQuote())}
            onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
            isAuthenticated={isAuthenticated}
            quote={quote}
            isSecretQuote={isSecretQuote}
          />
        </div>
      </div>
    )
  }
}

AuthApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

function mapStateToProps(state) {

  const { quotes, auth } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth
  
  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(AuthApp)