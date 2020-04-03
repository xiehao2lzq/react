
import React, { Component } from 'react'
//引入connect包装组件
import concectUi from "../../../connect/login_connect"
//引入样式文件
import "./index.scss"
//引入antdisgn
import { Input,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
//引入背景图资源，这地方真操蛋,不更改webpack配置不能引入public里面的文件，所以在src下面建立static文件夹存放
import bg from "../../../static/images/bg.png"
export class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            style:{
                "background-image":`url(${bg})`
            }
        }
    }
    render() {
        return (
            <div className="login" style={this.state.style}>
                <LoginBox/>
            </div>
        )
    }
}
class LoginBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }
    render() {
        return (
            <div className="loginBox">
                <div className="formBox clear">
                    <Input
                    placeholder="请输入用户名"
                    suffix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input.Password placeholder="请输入密码" />
                    <Button type="primary" className="btn">立即登录</Button>
                </div>
            </div>
        );
    }
}
export default concectUi(Login)
