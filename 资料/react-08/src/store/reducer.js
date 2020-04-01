import state from "./state"
import {ADD_NEW_TODO,CHANGE_FINISHE,DELETE_FINISHE} from "./const"
//纯函数
//固定的输入必定要有固定的输出
//并且内部不能有不纯的操作  new Date()  Math.random()
const reducer = (previouState = state,action)=>{
    let new_state = {...previouState};
    switch (action.type) {
        case ADD_NEW_TODO:
            new_state.todos.push({id:handler.getId(new_state.todos),title:action.title,isFinished:false});
            break;
        case CHANGE_FINISHE:
            new_state.todos = handler.changeFinish(new_state.todos,action.id)
            break;
        case DELETE_FINISHE:
            new_state.todos = handler.deleteTodo(new_state.todos,action.id)
            break;
        default:
            break;
    }

    //往localstorage存状态
    localStorage.todos = JSON.stringify(new_state.todos);
    return new_state;//返回新状态
}
export default reducer;

const handler = {
    deleteTodo(arr,id){
        let newArr = arr.slice();
        return newArr.filter(todo=>{
            if(todo.id===id) return false; //不需要放入数组里面的数据
            return true;
        })
    },
    changeFinish(arr,id){
        let newArr = arr.slice();
        for(var i=0;i<newArr.length;i++){
            if(newArr[i].id === id){
                newArr[i].isFinished = !newArr[i].isFinished
                return newArr;
            }
        }
    },
    getId(arr){
        let newArr = arr.slice();//数组的拷贝
        if(newArr.length===0) return 1;
        return newArr.sort((a,b)=>{
            return b.id - a.id
        })[0].id +1
    }
}

// var arr = [{id:1,username:"zhangsan1"},{id:2,username:"zhangsan2"}]
// var newArr = arr.sort((a,b)=>{
//    return b.id - a.id
// })
// console.log(newArr[0].id+1)


