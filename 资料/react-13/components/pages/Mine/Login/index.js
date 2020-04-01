import React,{Component} from "react"
import "./index.scss" 
import {GroupCommons} from "../../../../modules/group"
class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
    }
    login(){
        //执行登录，然后去更改state里面的状态 userInfo:{username:"二狗"}
        this.props.login({
            username:"123",
            password:"456",
            success:(data)=>{
                //alert(data);
                //就可以执行跳转了！
                //this.props.history.replace("/mine/user");
            },
            fail:(data)=>{
                alert(data);
            }
        });
    }

    render(){
        // console.log("login",this.props)
        return (
            <div>
                <button onClick={this.login}>Login!!!</button>
            </div>
        )
    }
}
export default GroupCommons(Login)