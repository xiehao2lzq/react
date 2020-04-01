import {createStore,applyMiddleware} from 'redux';
import reducer from "./reducer"
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk)); //引入redux中间件 增强了dispatch功能
export default store;


