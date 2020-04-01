import React,{Component} from "react"
import {GroupCommons} from "../../../../modules/group"
import { Toast} from 'antd-mobile';
class LoginUserForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        //调用actionCreators里面的具体login方法
        this.props.loginByUser({
            username:this.username.value,
            password:this.password.value,
            success:(data)=>{
                Toast.success(data,1);
            },
            fail:(data)=>{
                Toast.fail(data,1,()=>{
                   this.username.value = ""
                   this.password.value = ""
                });
            }
        })
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input ref={el=>this.username=el} name="phone" placeholder="用户" type="text"/>
                    </div>
                    <div className="form-group">
                        <input ref={el=>this.password=el}  name="code" placeholder="密码" type="password"/>
                    </div>
                    <button type="submit" className="btn">登录</button>
                </form>
            </div>
        )
    }
}
export default GroupCommons(LoginUserForm);