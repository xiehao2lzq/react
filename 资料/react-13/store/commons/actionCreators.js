import {CHECK_USER_INFO} from "./consts"
export default {
    login({username,password,success,fail}){
        //因为已经安装了 redux-thunk中间件   增强dispatch功能  异步请
        return dispatch=>{
            setTimeout(() => {
                if(username==="123" && password==="456"){
                    dispatch({type:CHECK_USER_INFO,userInfo:{username:"二狗"}})
                    success && success("登录成功！")
                    return false;
                }
                fail && fail("登录失败！");
            }, 1000);
        }
    },
    exit(){
        return {type:CHECK_USER_INFO,userInfo:null}
    }
}
