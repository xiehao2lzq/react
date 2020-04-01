import React,{Component} from "react"
// import actionCreators from "../../store/todolist/actionCreators"
// import store from "../../store"
// import {connect} from "react-redux"
// import {bindActionCreators} from "redux"

import GroupTodoList from "../../modules/group-todolist"
//无状态组件   引子组件
//受控组件  非受控组件  ref
//HOC 高阶组件

//只有属性没有状态  其实就是一个函数  接受外部传入的属性做出相应的渲染
const ListItem = (props)=>{
    const handleChange = ()=>{
        //创建action了....
        props.method.changeFinish(props.item.id);
    }
    const deleteTodo = ()=>{
        props.method.deleteTodo(props.item.id);
    }
    return (
        <li className={"list-group-item "+(props.item.isFinished?"finish":"")}>
            <input onChange={handleChange} type="checkbox" defaultChecked={props.item.isFinished?"checked":""}/>
            <span>{props.item.title}</span>    
            <button onClick={deleteTodo} type="button" className="close"><i>&times;</i></button>
        </li>
    )
}


class TodoContent extends Component{
    render(){
        return(
            <ul className="list-group">
               {
                   this.props.todos.map(item=>{
                        return <ListItem method={this.props} key={item.id} item={item}/>
                    })
               }
            </ul>
        )
    }
}
//this.props就可以获取到状态与所有的actionCreator里面提供的方法了！
export default GroupTodoList(TodoContent);