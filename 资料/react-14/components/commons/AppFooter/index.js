import React,{Component} from "react"
import "./index.scss" 
import {NavLink} from "react-router-dom"
class AppFooter extends Component{
    renderFooter(){
        let {navs} = this.props;
        return navs.map(item=>{
            return (<NavLink activeClassName="actived" key={item.id} to={{pathname:item.path}} exact={item.exact}>
                        <i className={"fa fa-"+item.icon}></i>
                        <span>{item.title}</span>
                    </NavLink>)
        })
    }
    render(){
        return (
            <div className="app-footer">
                {this.renderFooter()}
            </div>
        )
    }
}

AppFooter.defaultProps = {
    navs:[
        {id:1,path:"/",icon:"home",title:"首页",exact:true},  
        {id:2,path:"/list",icon:"list",title:"列表"},  
        {id:3,path:"/buycar",icon:"shopping-bag",title:"购物袋"},
        {id:4,path:"/mine",icon:"globe",title:"我的"}  
    ]
}
export default AppFooter;