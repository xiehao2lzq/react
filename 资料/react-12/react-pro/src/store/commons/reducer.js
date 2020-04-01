//纯函数  固定的输入必须要有固定的输出
//内部不能修改之前的prevState 
//里面不能有不纯的方法（Math.random()  new Date()）   不能进行异步请求

import state from './state'
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch (action.type) {
    
        default:
            break;
    }
    return new_state;
}
export default reducer;