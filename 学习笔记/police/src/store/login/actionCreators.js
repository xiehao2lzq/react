import {Login} from "./const"
import axios from "../../axios"
export default{
    login(params,success,error){
        return dispatch=>{
            axios({
                method:"POST",
                url:"/plat/login",
                data:params
            }).then(res=>{
                if(res.code==="0100"){
                    let loginInfo = res.data
                    success&&success(res.msg)
                    dispatch({type:Login,loginInfo})
                }else{
                    error&&error(res.msg)
                }
                
            })
        }
    }
}