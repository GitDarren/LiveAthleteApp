//components/Quotes.js

import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6

export default class Quotes extends Component {
  render() {
    const {
      onQuoteClick,
      onSecretQuoteClick,
      isAuthenticated,
      quote,
      isSecretQuote
    } = this.props;

    return (
      <div>
        <div className="col-sm-3">
          <button onClick={onQuoteClick} className="btn btn-primary">
            Get Quotes
          </button>
        </div>

        {isAuthenticated && (
          <div className="col-sm-3">
            <button onClick={onSecretQuoteClick} className="btn btn-warning">
              Get a Secret quote
            </button>
          </div>
        )}
        <div className="col-sm-6">
          {quote &&
            !isSecretQuote && (
              <div>
                <blockquote>{quote}</blockquote>
              </div>
            )}

          {quote &&
            isAuthenticated &&
            isSecretQuote && (
              <div>
                <span className="label label-danger">Secret Quote</span>
                <hr />
                <blockquote>{quote}</blockquote>
              </div>
            )}
        </div>
      </div>
    );
  }
}

Quotes.propTyles = {
  onQuoteClick: PropTypes.func.isRequired,
  onSecretQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  quote: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
};
