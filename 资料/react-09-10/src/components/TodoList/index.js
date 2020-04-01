import React,{Component} from "react"
import TodoInput from "./TodoInput"
import TodoContent from "./TodoContent"
import TodoInfo from "./TodoInfo"
import "./index.scss"
class TodoList extends Component{
    render(){
        return(
            <div>
                <TodoInput></TodoInput>
                <TodoContent></TodoContent>
                <TodoInfo></TodoInfo>
            </div>
        )
    }
}
export default TodoList;