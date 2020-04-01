import state from "./state"
const reducer = (previouState = state,action)=>{
    let new_state = {...previouState};
    return new_state;//返回新状态
}
export default reducer