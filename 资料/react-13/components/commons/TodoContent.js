import React,{Component} from "react"
import actionCreators from "../../store/actionCreators"
import store from "../../store"

//无状态组件   引子组件
//受控组件  非受控组件  ref
//HOC 高阶组件

//只有属性没有状态  其实就是一个函数  接受外部传入的属性做出相应的渲染
const ListItem = (props)=>{
    const handleChange = ()=>{
        //创建action了....
        actionCreators.changeFinish(props.item.id);
    }
    const deleteTodo = ()=>{
        actionCreators.deleteTodo(props.item.id);
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
    constructor(props){
        super(props)
        this.state = {
            todos: store.getState().todos
        }
    }
    //store当中有新的状态，我可以实时的获取到新的状态
    componentWillMount(){
        //订阅发布的方法  订阅store里面状态变化
        //只要store里面的状态（数据）改变了，callback就会立马执行
        store.subscribe(()=>{
            this.setState({
                todos: store.getState().todos
            })
        })
    }
    render(){
        return(
            <ul className="list-group">
               {
                   this.state.todos.map(item=>{
                        return <ListItem key={item.id} item={item}/>
                    })
               }
            </ul>
        )
    }
}
export default TodoContent;