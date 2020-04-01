import state from "./state"
import {CHANGE_NUMBER,COMPUE} from "./const"
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch (action.type) {
        case CHANGE_NUMBER:
            new_state = handler.changeNumber(new_state,action.numType,action.num)
            break;
        case COMPUE:
            new_state =  handler.compute(new_state);
            break;
        default:
            break;
    }
    return new_state
}
export default reducer;

const handler = {
    changeNumber(state,numType,num){
        state[numType] = num;
        return state;
    },
    compute(state){ // "10 + 10"
        if(state["result"]!==0){
            if(state.prevNumber*1 === state.result-state.nextNumber){
                state.prevNumber = state.result;
            }
        }
        state["result"] = eval(state.prevNumber + state.operator + state.nextNumber);
        return state
    }
}
