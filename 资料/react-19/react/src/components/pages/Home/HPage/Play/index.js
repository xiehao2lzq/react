import React,{Component} from "react"
import "./index.scss" 
import Specials from "../../Specials"
class Play extends Component{
    render(){
        return (
            <div>
                Play!!!
                <div style={{"marginTop":"30px"}}>
                <Specials specialsName="play"/>
                </div>
            </div>
        )
    }
}
export default Play;