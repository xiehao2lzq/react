import {combineReducers} from "redux"
import commons from "./commons/reducer"
import home from "./home/reducer"
const reducer = combineReducers({
    commons,
    home
})
export default reducer;