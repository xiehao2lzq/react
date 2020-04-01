import React,{Component} from "react"
import "./index.scss" 
import Specials from "../../Specials"
class Luxury extends Component{
    render(){
        return (
            <div style={{"marginTop":"30px"}}>
                <Specials states="luxury" url="/sk/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk="/>
            </div>
        )
    }
}
export default Luxury;