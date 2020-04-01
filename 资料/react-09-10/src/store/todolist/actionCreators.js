import {ADD_NEW_TODO,CHANGE_FINISHE,DELETE_FINISHE} from "./const"
export default {
    addNewTodo(title){
        let action = {
            type: ADD_NEW_TODO,
            title
        }
        //将action派发给store
        //store.dispatch(action);
        return action
    },
    changeFinish(id){
        let action = {
            type:CHANGE_FINISHE,
            id
        }
        //store.dispatch(action);
        return action
    },
    deleteTodo(id){
        let action = {
            type:DELETE_FINISHE,
            id
        }
        //store.dispatch(action);
        return action
    }
}