import {createStore,applyMiddleware} from "redux"
import  reducer from "./reducer"
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk)); //单一的数据源

export default store;