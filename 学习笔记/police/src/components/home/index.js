import React, { Component } from 'react'
import {} from "redux"
import "./index.scss"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "../../store/home/actionCreators"
export class Index extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL+"logo192.png"} alt=""/>
                <div className="img">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default connect(state=>state.home,dispatch=>bindActionCreators(actionCreators,dispatch))(Index)
