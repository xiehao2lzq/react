import React, { Component } from 'react';
import {
  Home,
  List,
  Buycar,
  Mine
} from "./components/pages"
import {Route,Switch,withRouter} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"
import ListDetail from "./components/pages/List/ListDetail"
class App extends Component {
  
  //App.js是一个伪路由组件，当路由变化的时候，Route可以监听路由的变化，然后App.js组件属性就会发生
  //变化，这个钩子函数就会执行！
  

  componentWillReceiveProps(props){
    if(props.location.pathname==="/home"){
      //让他跳转到 /home/luxury
      props.history.replace("/home/luxury")
    }
  }

  componentDidMount(){
    //执行跳转
    this.props.history.replace("/home/luxury");
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

  //渲染footer
  renderFooter(){
    let {pathname} = this.props.location;
    // if(pathname==="/mine") return false;
    let no_footer_path = ["/mine/login"]; ///list/3
    if(no_footer_path.indexOf(pathname)>-1) return false;
    if(pathname.indexOf("/list/")>-1) return false;//  /list/3
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
      {id:1,path:"/home",component:Home},
      {id:2,path:"/list/listdetail",component:ListDetail},
      {id:3,path:"/list",component:List},
      {id:4,path:"/buycar",component:Buycar},
      {id:5,path:"/mine",component:Mine}
    ]
}


export default withRouter(App);
