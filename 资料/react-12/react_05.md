#### React-router 4+

在这里，我们学react-router 4.0版本，需要注意的是，在4.0中，路由的搭建更灵活，我们不会基于全局的对于路由进行管理，而是在使用的时候进行路由的配置

我们需要下载的也不是react-router了，而是 react-router-dom

[文档](https://www.cnblogs.com/zhanghuiming/p/7592132.html)

1. 首先现在最外层包裹上Router，Router分为两种：BrowserRouter/HashRouter

	BrowserRouter监听的是地址栏path的变化，HashRouter监听的是hash值的变化，注意HashRouter在某些时候会报一个警告，不允许重复跳转

    使用BrowserRouter需要后端去进行一个配置

2. 在需要切换路由的时候，引入Route，path指定路径，component指定要渲染的组件，render可以传入一个函数，在这里逻辑判断之后再去返回一个组件，exact属性设置之后，只有完全匹配之后才能使用

3. switch 里面只运行渲染一个路由，可以有效的防止同级路由多次渲染



<Switch>
   	<Route exact path = '/' component = {Home} />
   	
   	<Route path = '/render' render = {() => {
   		//做出一些逻辑操作之后，返回一个组件
   		return <div className = "content">render</div>
   	}} />
   	
   	<Route path = '/a/b' render = {() => {
   		//做出一些逻辑操作之后，返回一个组件
   		return <div className = "content">ab</div>
   	}} />
   	
   	<Route  path = '/a' render = {() => {
   		//做出一些逻辑操作之后，返回一个组件
   		return <div className = "content">a</div>
   	}} />
</Switch>

4. 重定向，可以使用Redirect组件，添加from、to属性进行重定向跳转

5. react-router中提供了Link和NavLink，都可以使用to属性进行跳转，NavLink可以对现在路由做出判断后给a标签加上样式或者类名，exact完全匹配

5. 路由传参数,react-router4里只有一种参数就是路由参数，需要配置 /detail/:id,而query参数能传，但是传的时候，和取的 时候都没有对应的api来使用

	它们都可以在this.props中的match、location里得到

6. withRouter高阶组件.高阶组件：就是一个函数，任务是为其他的组件添加一些属性和方法api，例如connect，可以将store中的一些东西安装到新生成的容器组件上   withRuter(App)    

	withRouter可以根据传入的组件生成一个新的组件，并且为新组件添加上router相关的api
	
7. 编程式导航： 在组件中获取到history的api进行跳转，如果是路由组件，直接从this.props中取出，如果不是的话，可以让外面的路由组件传入，或者可以使用withRouter高阶组件处理之后使用

