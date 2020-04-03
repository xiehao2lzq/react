import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "../store/login/actionCreators"
export default connect(state=>state.login,dispatch=>bindActionCreators(actionCreators,dispatch))