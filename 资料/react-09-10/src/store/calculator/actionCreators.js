import {CHANGE_NUMBER,COMPUE} from "./const"
import store from "../index"
export default {
    changeNumber(numType,num){
        let action = {
            type:CHANGE_NUMBER,
            numType,
            num
        }
        // store.dispatch(action);
        return action;
    },
    computeNum(){
        // setTimeout(() => {
        //     let action = {
        //         type:COMPUE
        //     }
        //     // store.dispatch(action)
        //     return action;
        // }, 2000);
        return dispath=>{
            setTimeout(() => {
                let action = {
                    type:COMPUE
                }
                dispath(action);
            }, 2000);
        }
    }
}