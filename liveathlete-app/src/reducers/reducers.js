//reducers.js

import { combineReducers } from 'redux'
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
    QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE
} from './actions'

//The auth reducer. The starting state sets authentication
//based on a token being in local storage. Need to be able to 
//check if the token is expired.

function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false

}, action)  {
    switch (action.type)    {
        case LOGIN_REQUEST:
        return Object.assign({}, state {
            isFetching: true,
            isAuthenticated: false,
            user: action.creds
        })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessages: ""
                
            })
        case LOGIN_FAILURE:
            return Object.assign({}. state, {
                isFetching: false, 
                isAuthenticated: false,
                errorMessages: action.message
            })
        default:
            return state
    }
}

//The quotes reducer
function quotes(state = {
    isFetching: false,
    quote: '',
    authenticated: false

}, action) {
    switch (action.type)    {
        case QUOTE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case QUOTE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                quote: action.response,
                authenticated: action.authenticated || false
            })
            case QUOTE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
            })
        default:
            return state
    }
}

//We combine the reducers here so that they
//can be left split apart above

const quotesApp = combineReducers({
    auth,
    quotes
})

export default quotesApp

