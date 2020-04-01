import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "../../store/commons/actionCreators"

export default connect(state=>state.commons,dispatch=>{
    return bindActionCreators(actionCreators,dispatch);
})