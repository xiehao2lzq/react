import React,{Component} from "react"
import "./index.scss" 
import Specials from "../../Specials"
class Play extends Component{
    render(){
        return (
            <div>
                Play!!!
                <div style={{"marginTop":"30px"}}>
                    <Specials states="play" url="/sk/api/home/home_page?code=2&c_platform_type=0&c_app_ver=6.0.0&c_upk="/>
                </div>
            </div>
        )
    }
}
export default Play;