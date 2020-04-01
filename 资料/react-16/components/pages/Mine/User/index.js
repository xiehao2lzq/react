import React,{Component} from "react"
import "./index.scss" 
import GroupState from "../../../../modules/group"
class User extends Component{
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this);
    }
    exit(){
        //更改状态
        this.props.exit();
    }

    //一旦userInfo这个状态发生了变化，容器组件就会给它传递新的属性
    // componentWillReceiveProps(props){
    //     if(!props.userInfo) props.history.replace("/mine/login");
    // }

    render(){
        return (
            <div>
                {!this.props.userInfo || this.props.userInfo.username}
                <button onClick={this.exit}>注销</button>
            </div>
        )
    }
}
export default GroupState(User,{
    reducer:"commons",
    states:["userInfo"]
});