import {combineReducers} from "redux"
import community from "./community/reducer"
import login from "./login/reducer"
const reducer = combineReducers({
    community,
    login
});
export default reducer;