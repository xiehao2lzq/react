import state from "./state"
import {Login} from "./const"
const reducer = (previouState = state,action)=>{
    let new_state = {...previouState};
    switch (action.type) {
        case Login:
                let Authorization = `Bearer ${action.access_token}`
                let userId = action.userId
                sessionStorage.setItem("Authorization",Authorization)//token本地缓存
                sessionStorage.setItem("userId",userId)
                //已经登录
                new_state.logined = true
                //window.location.href = '#/bigData';
            break;
    
        default:
            break;
    }
    return new_state;//返回新状态
}
export default reducer