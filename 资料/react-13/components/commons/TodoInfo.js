import React,{Component} from "react"
import store from "../../store"
class TodoInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos:store.getState().todos
        }
    }
    getInfo(){
        let info = {total:0,finish:0,unfinish:0};
        let {todos} = this.state;
        if(todos.length===0) return info; //数组没有长度
        info.total = todos.length; //总数就是数组的长度
        todos.forEach(item=>{
            if(item.isFinished){
                info.finish++
            }else{
                info.unfinish++
            }
        })
        return info;
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                todos:store.getState().todos
            })
        })
    }
    render(){
        let info = this.getInfo();
        return(
            <div  className="alert alert-info">
                <span className="label label-primary">总共{info.total}条数据</span>
                <span className="label label-primary">完成{info.finish}条数据</span>
                <span className="label label-primary">未完成{info.unfinish}条数据</span>
            </div>
        )
    }
}
export default TodoInfo;