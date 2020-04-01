##react-pro
    1. create-react-app react-pro
       yarn eject抽离  config/scripts 抽离出来

       yarn add axios redux react-redux redux-thunk -S
       yarn add node-sass -D

    2. 搭建项目结构
            src/stylesheets/main.scss
                           /_base.scss
                           /_reset.scss
                           /_commons.scss
                           /_mixins.scss
            index.js文件中导入  mian.scss文件


            src/store
                  /index.js
                     const store = createStore(reducer,applyMiddlerware(thunk))
                  /reducer.js
                     export default combineReducers({})
                  /commons文件
                     /actionCreators.js
                     /reducer.js
                     /const.js
                     /state.js


            src/components
                  /commons
                     /template-scss文件夹
                        （index.js组件  index.scss样式文件）
                  /pages
   
   3. 通过axios实现接口数据请求

      
   4. 路由 
      1.cnpm install react-router-dom -S
      2.index.js文件
         import {HashRouter as Router} from "react-router-dom"
         <Router>
            <App />
         </Router>
      3.App.js文件
            import {Route,Switch} from "react-router-dom"
            <Switch>
               <Route path="/" component={Home} exact/>  
               <Route path="/list" component={List}/>
               <Route path="/buycar" component={Buycar}/>
               <Route path="/mine" component={Mine}/>
          </Switch>

      4.优化一级路由

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
            return (
               <div className="App">
                  {this.renderRoute()}
               </div>
            );
         }

      5.分析如何将AppFooter引入到我们组件中？

         1）放入App.js文件中使用
            将AppFooter放入app.js文件中引入，就会导致所有的组件都会显示AppFooter组件。


            让App组件监听路由的变化，然后做出判断，选择性的去渲染AppFooter

            发现了app组件每次进行路由切换的时候，render函数都会执行一次
               *只有组件的属性或者状态改变了，render函数才会执行！
               *发现App.js组件没有状态，发现componentWillReceiveProps方法没有发生变化，所以说app.js组件也没有接受新的属性。
               *原因就是父组件Router的属性或者状态发生改变了，render了，导致子组件App的render函数也会重新执行！
               *可不可以在shouldComponentUpdate钩子函数改变某条状态来控制AppFooter是否显示隐藏？
               *答案是不可以的！因为当你状态改变的时候，shouldComponentUpdate函数会重新的执行，就会造成死循环！

            
            对比 App.js与Mine.js发现这些现象
               App.js 的 props上面就只有  navs
               Mine.js的 props上面就有 history/location/match这一些玩意？
                  Mine外面被Route包裹，所以Mine组件是路由组件，就会有这些属性


            发现Mine.js组件的componentWillReceiveProps（props,sate）钩子函数，在路由变化的时候，可以触发执行。
            *路由组件可以监听路由的变化！

            App.js因为不是路由组件？所以监听不到路由的变化，那我们把他变成路由组件不就可以监听路由变化了吗？

               withRouter可以根据传入的组件生成一个新的组件，并且为新组件添加上router相关的api


             withRouter(App) 包裹之后 App组件就被称为伪路由组件？可以监听路由的变化，但是不能实现跳转功能。
               






         2）哪个组件使用我就直接将AppFooter引入到哪里即可

            AppFooter.js文件
               <div className="app-footer">
                  <Link to="/">
                     <i className="fa fa-home"></i>
                     <span>首页</span>
                  </Link>
                  <Link  to="/list">
                     <i className="fa fa-list"></i>
                     <span>列表</span>
                  </Link>
                  <Link  to="/buycar">
                     <i className="fa fa-shopping-bag"></i>
                     <span>购物袋</span>
                  </Link>
                  <Link  to="/mine">
                     <i className="fa fa-globe"></i>
                     <span>我的</span>
                  </Link>
               </div>

            //把一些数据放入到APP.defaultProps中

            renderFooter(){
               let {navs} = this.props;
               return navs.map(item=>{
                     return (<NavLink activeClassName="actived" key={item.id} to={  {pathname:item.path}} exact={item.exact}>
                                 <i className={"fa fa-"+item.icon}></i>
                                 <span>{item.title}</span>
                           </NavLink>)
               })
            }
