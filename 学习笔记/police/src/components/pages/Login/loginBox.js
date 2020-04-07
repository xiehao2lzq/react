import React, { Component } from 'react'
//引入connect包装组件
import concectUi from "../../../connect/login_connect"
//引入antdisgn
import { Input,Button,message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
class LoginBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
        this.onKeyDown = this.onKeyDown.bind(this)
    }
    //初始化绑定函数
    componentDidMount(){
        document.addEventListener("keydown", this.onKeyDown)
      }
    //离开时销毁
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onKeyDown)
    }
    //解构传参获取用户名密码
    gainUsername({target:{value}}){
        this.setState({username:value})
    }
    gainPassword({target:{value}}){
        this.setState({password:value})
    }
    //键盘点击
    onKeyDown({keyCode}){
        if(keyCode!==13) return false
        //console.log(this)
        this.login()
    }
    login(){
        //console.log(this.props.loginMethod)
        let params = {
            "username":this.state.username,
            "password":this.state.password,
            "verifyCode":"1234"
        }
        //接收父组件传来的方法
        this.props.login(params,this.success,this.error)
    }
    success(msg){
        return message.success(msg,2);
    }
    error(msg){
        return message.error(msg,2);
    }
    render() {
        return (
            <div className="loginBox">
                <div className="formBox clear">
                    <Input
                    placeholder="请输入用户名"
                    suffix={<UserOutlined className="site-form-item-icon" />}
                    onChange = {(e)=>this.gainUsername(e)}/* 还可以用bind，或者在执行的时候选择返回函数的形式 */
                    />
                    <Input.Password 
                    placeholder="请输入密码" 
                    onChange = {(e)=>this.gainPassword(e)}/* 还可以用bind，或者在执行的时候选择返回函数的形式 */
                    />
                    <Button onClick={()=>this.login()} type="primary" className="btn">立即登录</Button>
                </div>
            </div>
        );
    }
}
export default concectUi(LoginBox)