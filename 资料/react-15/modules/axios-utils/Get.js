import axios from "axios"


export default function({url,data}){
    return axios.get(url,{
        params:data
    })
}


