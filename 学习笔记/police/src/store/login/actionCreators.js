import {Login} from "./const"
import axios from "../../axios"
export default{
    login(params){
        return dispatch=>{
            axios({
                method:"POST",
                url:"/plat/login",
                data:params
            }).then(res=>{
                var loginInfo = null
                if(res.code==="0100"){
                    loginInfo = {...res.data,status:true,msg:res.msg}
                }else{
                    loginInfo = {status:false,msg:res.msg}
                }
                dispatch({type:Login,loginInfo})
            })
        }
    }
}