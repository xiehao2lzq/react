
const state = require("./state")
//纯函数
//固定的输入必定要有固定的输出
const reducer = (previouState = state,action)=>{
    let new_state = {...previouState};
    return new_state;
}
// export default reducer;
module.exports = reducer;