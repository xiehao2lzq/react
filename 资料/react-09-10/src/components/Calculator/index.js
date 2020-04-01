import React,{Component} from "react"
import Expression from "./Expression"
import Result from "./Result"
import "./index.scss"
class Calculator extends Component{
    render(){
        return (
            <div className="calculator">
                <Expression/> = <Result/>
            </div>
        )
    }
}
export default Calculator;