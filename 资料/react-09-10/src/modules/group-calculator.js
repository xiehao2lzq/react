import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "../store/calculator/actionCreators"
export default connect(state=>state.calculator,dispatch=>bindActionCreators(actionCreators,dispatch))


//容器组件 HOC 高阶组件
// groupTodolist(ui组件)