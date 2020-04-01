import {CHECK_USER_INFO} from "./consts"
export default {
    loginByUser({username,password,success,fail}){
        //因为已经安装了 redux-thunk中间件   增强dispatch功能  异步请
        return dispatch=>{
            setTimeout(() => {
                if(username==="123" && password==="456"){
                    dispatch({type:CHECK_USER_INFO,userInfo:{username:"二狗"}})
                    success && success("用户登录成功！")
                    return false;
                }
                fail && fail("用户登录失败！");
            }, 1000);
        }
    },
    loginByPhone({phone,code,success,fail}){
        return dispatch=>{
            setTimeout(() => {
                if(phone==="110" && code==="456"){
                    dispatch({type:CHECK_USER_INFO,userInfo:{username:"二狗"}})
                    success && success("手机登录成功！")
                    return false;
                }
                fail && fail("手机登录失败！");
            }, 1000);
        }
    },
    exit(){
        return {type:CHECK_USER_INFO,userInfo:null}
    }
}
