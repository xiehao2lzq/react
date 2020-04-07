import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export class NavBox extends Component {
    renderRouter(){
        let {navs} = this.props
        return navs.map(item=>{
            return (
                <NavLink key={item.id} to={{pathname:item.path,query:123}} >
                    <img src={item.src} alt=""/>
                </NavLink>
            )
        })
    }
    render() {
        return (
            <div className="navBox">
                {
                    this.renderRouter()
                }
            </div>
        )
    }
}
NavBox.defaultProps = {navs:[
    {id:1,path:"/community",src:require("../../../static/images/1.png")},
    {id:2,path:"/dealData",src:require("../../../static/images/3.png")},
    {id:3,path:"/monitoring",src:require("../../../static/images/4.png")},
    {id:4,path:"/bigData",src:require("../../../static/images/5.png")}
]}

export default NavBox
