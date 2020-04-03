import state from "./state"
import {Login} from "./const"
const reducer = (previouState = state,action)=>{
    let new_state = {...previouState};
    switch (action.type) {
        case Login:
            let {loginInfo} = action
            if(loginInfo.status){
                new_state.successMsg = previouState.successMsg.concat()
                new_state.successMsg.unshift(loginInfo.msg)
                //console.log(loginInfo)
                let Authorization = `Bearer ${loginInfo.access_token}`
                let userId = loginInfo.userId
                sessionStorage.setItem("Authorization",Authorization)//token本地缓存
                sessionStorage.setItem("userId",userId)
                //window.location.href = '#/bigData';
            }else{
                new_state.errorMsg = previouState.errorMsg.concat()
                new_state.errorMsg.unshift(loginInfo.msg)
            }
            break;
    
        default:
            break;
    }
    return new_state;//返回新状态
}
export default reducer