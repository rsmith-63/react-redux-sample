import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import usersReducer from './reducers/users';
import userProfile from './reducers/userProfile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(

   combineReducers({usersReducer, userProfile}),
    composeEnhancers (applyMiddleware(
        logger,
        promise
    )),

);