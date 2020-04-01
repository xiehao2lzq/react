import React,{Component} from "react"
import TodoInput from "./TodoInput"
import TodoContent from "./TodoContent"
class TodoList extends Component{
    render(){
        return(
            <div>
                <TodoInput></TodoInput>
                <TodoContent></TodoContent>
            </div>
        )
    }
}
export default TodoList;