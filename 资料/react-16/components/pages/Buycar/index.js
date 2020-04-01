import React,{Component} from "react"
import "./index.scss" 

//HOC  就是一个函数  接受一个组件 返回新组件   一些属性
const HOC = (Comp)=>{
    return class withClick extends Component{
        handlerClick(){
            console.log(1) 
        }
        render(){
            return <Comp handlerClick={this.handlerClick}/>
        }
    }
}

class A extends Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handlerClick}>A!!!</button>
            </div>
        )
    }
}
class B extends Component{
    render(){
        return (
            <div>
                 <button onDoubleClick={this.props.handlerClick}>B !!!</button>
            </div>
        )
    }
}

var HA = HOC(A)
var HB = HOC(B)
class Buycar extends Component{
    render(){
        return (
            <div>
                <HA/>
                <HB/>
            </div>

        )
    }
}
export default Buycar;