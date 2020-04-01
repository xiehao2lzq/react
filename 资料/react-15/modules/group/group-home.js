import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "../../store/home/actionCreators"

export default connect(state=>state.home,dispatch=>{
    return bindActionCreators(actionCreators,dispatch);
})