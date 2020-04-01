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
  
  //App.js是一个伪路由组件，当路由变化的时候，Route可以监听路由的变化，然后App.js组件属性就会发生
  //变化，这个钩子函数就会执行！
  

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

  //渲染footer
  renderFooter(){
    let {pathname} = this.props.location;
    // if(pathname==="/mine") return false;
    let no_footer_path = ["/mine/login"];
    if(no_footer_path.indexOf(pathname)>-1) return false;
    return <AppFooter/>;
  }
  render() {
    return (
      <div className="App">
          {this.renderRoute()}
          {this.renderFooter()}
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
