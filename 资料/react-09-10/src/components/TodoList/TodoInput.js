import React,{Component} from "react"
// import actionCreators from "../../store/todolist/actionCreators"
// import {connect} from "react-redux"
// import {bindActionCreators} from "redux"
import GroupTodoList from "../../modules/group-todolist"
class TodoInput extends Component{ //create
    constructor(props){
        super(props)
        //改变this指向
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        // console.log(e.target.value);
        //console.log(this.el.value)
        if(e.keyCode===13){
            // actionCreators.addNewTodo(e.target.value);
            this.props.addNewTodo(e.target.value)
            e.target.value = ""
        }
    }
    render(){
        return(
            <input ref={el=>this.el=el} onKeyUp={this.handleChange} className="form-control" type="text"/>
        )
    }
}
//处理一些actioncreators里面的方法
//让actionCreators更加纯粹 ==> 只需要创建action 返回action 
// const mapDispatchToProps = dispatch=>{
//     return {
//         addNewTodo:function(title){
//            let action =  actionCreators.addNewTodo(title)
//            dispatch(action)
//         }
//     }
// }

//将所有操作状态的方法全部取出来，然后绑定到ui组件的props上，顺便dispatch传递给reducer.
// const mapDispatchToProps = dispatch=>{
//     return bindActionCreators(actionCreators,dispatch);
// }

        
//state==> store.getState() ==> reducer返回什么 combindd({todolist,ccalc})
// const mapStateToPropos = state=>{
//     return state;
// }
export default GroupTodoList(TodoInput);


// let a = 20;
// function abc(){
//     let a = 10
//     console.log(a)
// }

// abc();
// console.log(a)