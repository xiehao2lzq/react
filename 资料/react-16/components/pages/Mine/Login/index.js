import React,{Component} from "react"
import "./index.scss" 
import GroupState from "../../../../modules/group"
import { NavBar, Icon } from 'antd-mobile';
import LoginTextForm from "./LoginTextForm"
import LoginUserForm from "./LoginUserForm"
class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
        this.state = {
            loginType:"text"
        }
    }
    login(){
        //执行登录，然后去更改state里面的状态 userInfo:{username:"二狗"}
        this.props.login({
            username:"123",
            password:"456",
            success:(data)=>{
                //this.props.history.replace("/mine/user");
            },
            fail:(data)=>{
                alert(data);
            }
        });
    }

    //实现切换登录方式
    changeLoginType(){
        let {loginType} = this.state;//获取组件自身的状态loginType="text"
        let title = "账号密码登录";
        let Form = LoginTextForm;
        let type = "user";
        if(loginType !== "text"){ //用户名密码登录
            title = "短信快捷登录";
            Form = LoginUserForm;
            type = "text"
        }
        const changeLoginType = ()=>{
            //改变类型状态为 "user"
            this.setState({
                loginType:type
            })
        }
        return (
            <div className="content">
                <Form/>
                <p onClick={changeLoginType} className="change-form">{title}</p>
            </div>
        )    
    }

    render(){
        let {loginType} = this.state;
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.push("/")}
                    >{loginType==="text"?"短信快捷":"账号密码"}登录</NavBar>
                {this.changeLoginType()}
            </div>
        )
    }
}
export default GroupState(Login,{
    reducer:"commons",
    states:["userInfo"]
})