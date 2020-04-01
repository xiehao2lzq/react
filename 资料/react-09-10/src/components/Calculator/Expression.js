import React,{Component} from "react"
import actionCreator from "../../store/calculator/actionCreators"
import store from "../../store"
import GroupCalculator from "../../modules/group-calculator"
class Expression extends Component{
    constructor(props){
        super(props)
        this.handlePrevnumer = this.handleChange.bind(this,"prevNumber") //bind apply call?
        this.handleNextnumer = this.handleChange.bind(this,"nextNumber")
        this.compute = this.compute.bind(this);
    }

    handleChange(numType,e){
        console.log(this.props)
       // console.log(numType,e.target.value)
        //创建action了
        this.props.changeNumber(numType,e.target.value);
    }
    compute(){
        this.props.computeNum();
    }
    //input的defaultValue只是可以用来渲染默认数据
    //如果input值不仅仅是渲染默认初始值，而是当你状态改变的时候，也要去更改value值的时候，
    //就不能采用defaultValue了，而应该换成value
    render(){
        let {prevNumber,operator,nextNumber}  = this.props;
        return (
            <div className="expression">
                <input value={prevNumber} onChange={this.handlePrevnumer} className="form-control" type="text"/>
                <button onClick={this.compute} className="btn btn-default">{operator}</button>
                <input  value={nextNumber}  onChange={this.handleNextnumer} className="form-control" type="text"/>
            </div>
        )
    }
}
export default GroupCalculator(Expression);