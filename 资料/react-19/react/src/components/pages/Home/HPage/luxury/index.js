import React,{Component} from "react"
import "./index.scss" 
import Specials from "../../Specials"
class Luxury extends Component{
    render(){
        return (
            <div style={{"marginTop":"30px"}}>
                <Specials specialsName="luxury"/>
            </div>
        )
    }
}
export default Luxury;