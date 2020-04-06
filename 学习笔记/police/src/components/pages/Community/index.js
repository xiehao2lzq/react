import React, { Component } from 'react'
import "./index.scss"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "../../../store/community/actionCreators"
export class Community extends Component {
    componentWillMount(){
        console.log(1123)
    }
    render() {
        return (
            <div>
               Community
            </div>
        )
    }
}

export default connect(state=>state.community,dispatch=>bindActionCreators(actionCreators,dispatch))(Community)
