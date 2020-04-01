import React,{Component} from "react"
import actionCreators from "../../store/actionCreators"
class TodoInput extends Component{ //create
    constructor(props){
        super(props)
        //改变this指向
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        // console.log(e.target.value);
        //console.log(this.el.value)
        if(e.keyCode===13){
            actionCreators.addNewTodo(e.target.value);
            e.target.value = ""
        }
    }
    render(){
        return(
            <input ref={el=>this.el=el} onKeyUp={this.handleChange} className="form-control" type="text"/>
        )
    }
}
export default TodoInput;