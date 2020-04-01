import React,{Component} from "react"
// import store from "../../store"
// import {connect} from "react-redux"
import GroupTodoList from "../../modules/group-todolist"
class TodoInfo extends Component{
    
    getInfo(){
        let info = {total:0,finish:0,unfinish:0};
        let {todos} = this.props;
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
    
    //属性发生变化？什么钩子函数会执行？
    // componentWillReceiveProps(){
    //     console.log(11111111111)
    // }


    render(){
        let info = this.getInfo();
        return(
            <div  className="alert alert-info">
                <span className="label label-primary">总共{info.total}条数据</span>
                <span className="label label-primary">完成{info.finish}条数据</span>
                <span className="label label-primary">未完成{info.unfinish}条数据</span>
            </div>
        )
        return ""
    }
}
//容器组件（智能组件）connect()(UI组件/木偶组件)
//该函数返回什么状态，ui组件就会获取什么数据
//state==>相当于 store.getState()
//connect(TodoInfo)是容器组件 可以监听到状态的改变，状态一旦变化了，就会重新给UI组件传递新的属性
//connect(TodoInfo)是容器组件  其实内部帮助我们实现了 store.subscribe()

export default GroupTodoList(TodoInfo);