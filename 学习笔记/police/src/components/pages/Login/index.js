
import React, { Component } from 'react'
//引入connect包装组件
import concectUi from "../../../connect/login_connect"
//引入样式文件
import "./index.scss"
//引入背景图资源，这地方真操蛋,不更改webpack配置不能引入public里面的文件，所以在src下面建立static文件夹存放
import bg from "../../../static/images/bg.png"
//引入登录组件
import LoginBox from "./loginBox"
import NavBox from "./navBox"
export class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            style:{
                "backgroundImage":`url(${bg})`
            }
        }
    }
    render() {
        return (
            <div className="login" style={this.state.style}>
               {sessionStorage.getItem("Authorization")?<NavBox/>:<LoginBox/>}
            </div>
        )
    }
}

export default concectUi(Login)
