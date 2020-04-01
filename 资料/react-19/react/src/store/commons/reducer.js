//纯函数  固定的输入必须要有固定的输出
//内部不能修改之前的prevState 
//里面不能有不纯的方法（Math.random()  new Date()）   不能进行异步请求

import state from './state'
import {CHECK_USER_INFO} from "./consts"
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch (action.type) {
        case CHECK_USER_INFO:
            new_state.userInfo = action.userInfo;
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;