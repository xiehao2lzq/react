import React, { Component } from 'react';
import {
  Home,
  List,
  Buycar,
  Mine
} from "./components/pages"
import {Route,Switch,withRouter} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasFooter:true
    }
  }
  componentWillReceiveProps(props){ //不会让其他钩子函数重新执行！
    // console.log(props.location.pathname)
    let {pathname} = props.location;
    if(pathname==="/mine"){
        this.setState({
          hasFooter:false
        })
    }else{
      this.setState({
        hasFooter:true
      })
    }
  }

  renderRoute(){
    //获取默认属性 navs
    let {navs} = this.props;
    return (
      <Switch>
        {
          navs.map(item=>{
            return (
              <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/> 
            )
          })
        }
      </Switch>
    )
  }
  render() {
    //console.log("app.js",this)
    let {hasFooter} = this.state;
    return (
      <div className="App">
          {this.renderRoute()}
          {!hasFooter || <AppFooter/>}
      </div>
    );
  }
}
//默认属性
App.defaultProps = {
    navs:[
      {id:1,path:"/",component:Home,exact:true},
      {id:2,path:"/list",component:List},
      {id:3,path:"/buycar",component:Buycar},
      {id:4,path:"/mine",component:Mine}
    ]
}


export default withRouter(App);
