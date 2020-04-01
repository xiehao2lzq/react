import React,{Component} from "react"
import GroupCalculator from "../../modules/group-calculator"
class Result extends Component{
    render(){
        return (
            <div>
                <button className="btn btn-default">{this.props.result}</button>
            </div>
        )
    }
}
export default GroupCalculator(Result);