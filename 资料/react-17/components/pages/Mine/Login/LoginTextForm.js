import React,{Component} from "react"
import GroupState from "../../../../modules/group"
import { Toast} from 'antd-mobile';
class LoginTextForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        //调用actionCreators里面的具体login方法
        this.props.loginByPhone({
            phone:this.phone.value,
            code:this.code.value,
            success:(data)=>{
                Toast.success(data,1);
            },
            fail:(data)=>{
                Toast.fail(data,1,()=>{
                   this.phone.value = ""
                   this.code.value = ""
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
                        <input ref={el=>this.phone=el} name="phone" placeholder="手机号" type="text"/>
                    </div>
                    <div className="form-group">
                        <input ref={el=>this.code=el}  name="code" placeholder="验证码" type="text"/>
                    </div>
                    <button type="submit" className="btn">登录</button>
                </form>
            </div>
        )
    }
}
export default GroupState(LoginTextForm,{
    reducer:"commons",
    states:["userInfo"]
});