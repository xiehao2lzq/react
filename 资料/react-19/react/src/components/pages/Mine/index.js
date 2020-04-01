import React,{Component} from "react"
import "./index.scss" 
import Login from "./Login"
import User from "./User"
import {Route} from "react-router-dom"
import GroupState from "../../../modules/group"
class Mine extends Component{

    componentWillReceiveProps(props){
        if(props.userInfo !== this.props.userInfo || props.location.pathname==="/mine"){
            this.checkUserInfo(props);
        }
    }

    componentDidMount(){
        this.checkUserInfo();
    }

    checkUserInfo(props){
        let {userInfo} = props||this.props;
        if(userInfo){//跳到  /mine/user
            this.props.history.replace("/mine/user");
        }else{ //跳到  /mine/login  replace是不会记录  /mine  /mine/login的过程
            this.props.history.replace("/mine/login");
        }
    }

    render(){
        //console.log(this.props)
        return (
            <div>
                <Route path="/mine/login" component={Login}/>
                <Route path="/mine/user" component={User}/>
            </div>
        )
    }
}
export default GroupState(Mine,{
    reducer:"commons",
    states:["userInfo"]
});