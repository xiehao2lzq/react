import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
import {routerMiddleware} from 'react-router-redux';

let createHistory = require('history').createHashHistory;
let history = createHistory();   //! 初始化history
let routerWare = routerMiddleware(history);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk, routerWare)
));
//const store = createStore(reducer,applyMiddleware(thunk));
export default store;