import axios from "axios"
import qs from "querystring"


export default function({url,data}){
    return axios.post(url,qs.stringify(data))
}
