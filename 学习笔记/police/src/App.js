

import React, { Component } from 'react'
import {BigData,
  Community,
  DealData,
  Login,
  Monitoring} from "./components/pages"
  import {Route,Switch,withRouter} from "react-router-dom"
 class App extends Component {
  
  renderRoute(){
    let {routers} = this.props;
    return(
      <Switch>
        {
          routers.map(item=>{
            return(
              <Route key={item.id} path={item.path} component={item.component} exact={item.exact}></Route>
            )
          })
        }
      </Switch>
    )
  }
  render() {
    return (
      <div>
        {this.renderRoute()}
      </div>
    )
  }
}
App.defaultProps = {
  routers:[
    {id:1,path:"/",component:Login,exact:true},
    {id:2,path:"/community",component:Community},
    {id:3,path:"/dealData",component:DealData},
    {id:4,path:"/monitoring",component:Monitoring},
    {id:5,path:"/bigData",cpmponent:BigData}
  ]
}
export default withRouter(App);
