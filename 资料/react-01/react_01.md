
# React框架学习

### React的起源和发展
    起初facebook在建设instagram（图片分享）的时候，因为牵扯到一个东西叫数据流，那为了处理数据流并且还要考虑好性能方面的问题，Facebook开始对市场上的各种前端MVC框架去进行一个研究，然而并没有看上眼的，于是Facebook觉得，还是自己开发一个才是最棒的，那么他们决定抛开很多所谓的“最佳实践”，重新思考前端界面的构建方式，他们就自己开发了一套，果然大牛创造力还是很强大的。

### React的出发点

    基于HTML的前端界面开发正变得越来越复杂，其本质问题基本都可以归结于如何将来自于服务器端或者用户输入的动态数据高效的反映到复杂的用户界面上。而来自Facebook的React框架正是完全面向此问题的一个解决方案，按官网描述，其出发点为：用于开发数据不断变化的大型应用程序（Building large applications with data that changes over time）。相比传统型的前端开发，React开辟了一个相当另类的途径，实现了前端界面的高性能高效率开发。

### React与传统MVC的关系

    轻量级的视图层框架！ 就是V!

    React不是一个完整的MVC框架，最多可以认为是MVC中的V（View），甚至React并不非常认可MVC开发模式；

### React高性能的体现：虚拟DOM

React高性能的原理：

在Web开发中我们总需要将变化的数据实时反应到UI上，这时就需要对DOM进行操作。而复杂或频繁的DOM操作通常是性能瓶颈产生的原因（如何进行高性能的复杂DOM操作通常是衡量一个前端开发人员技能的重要指标）。

React为此引入了虚拟DOM（Virtual DOM）的机制：在浏览器端用Javascript实现了一套DOM API。基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。而且React能够批处理虚拟DOM的刷新，在一个事件循环（Event Loop）内的两次数据变化会被合并，例如你连续的先将节点内容从A-B,B-A，React会认为A变成B，然后又从B变成A  UI不发生任何变化，而如果通过手动控制，这种逻辑通常是极其复杂的。

尽管每一次都需要构造完整的虚拟DOM树，但是因为虚拟DOM是内存数据，性能是极高的，部而对实际DOM进行操作的仅仅是Diff的差异更新，因而能达到提高性能的目的。这样，在保证性能的同时，开发者将不再需要关注某个数据的变化如何更新到一个或多个具体的DOM元素，而只需要关心在任意一个数据状态下，整个界面是如何Render的。数据驱动，声明式


### React的特点和优势

1. 虚拟DOM  ==> 高性能

我们以前操作dom的方式是通过document.getElementById()的方式，这样的过程实际上是先去读取html的dom结构，将结构转换成变量，再进行操作

而reactjs定义了一套变量形式的dom模型，一切操作和换算直接在变量中，这样减少了操作真实dom，性能真实相当的高，和主流MVC框架有本质的区别，并不和dom打交道

2. 组件系统  ===> 高效率

react最核心的思想是将页面中任何一个区域或者元素都可以看做一个组件 component

那么什么是组件呢？  .vue  template script style lang="scss" node-sass sass-loader
 
组件指的就是同时包含了html、css、js、image元素的聚合体

使用react开发的核心就是将页面拆分成若干个组件，并且react一个组件中同时耦合了css、js、image，这种模式整个颠覆了过去的传统的方式

3. 单向数据流  <Father><Son name=''/></Father>父子通信  vuex state--->component(this.$store.state) ----> actions（{commit}）(this.$store.dispatch()) ----> mutations(this.$store.commit()) -----> state

其实reactjs的核心内容就是数据绑定，所谓数据绑定指的是只要将一些服务端的数据和前端页面绑定好，开发者只关注实现业务就行了  

4. JSX  语法  

在vue中，我们使用render函数来构建组件的dom结构性能较高，因为省去了查找和编译模板的过程，但是在render中利用createElement创建结构的时候代码可读性较低，较为复杂，此时可以利用jsx语法来在render中创建dom，解决这个问题，但是前提是需要使用工具来编译jsx





### 创建第一个组件  15.  16

react开发需要引入多个依赖文件：react.js、react-dom.js，分别又有开发版本和生产版本

在这里一开始，我们先学习es5的组件写法，React.createClass，需要引入的是15+

react.js中有React对象，帮助我们创建组件等功能   Vue

react-dom.js中有ReactDOM对象，渲染组件的虚拟dom为真实dom的爆发功能
    
在编写react代码的时候会大量的使用到jsx代码，但是需要编译：

1. 浏览器端编译，通过引入browser、babel等对引入的script内的代码做编译
2. 利用webpack等开发环境进行编译，将编译好的文件引入到应用中


```
new Vue({
    template:"#abc"
});
    //创建组件
    var Hello = React.createClass({ //16版本以前
        render:function() {
            //render函数和Vue组件里的render完全一样，在vue组件中可以不用编写render函数，这个时候可以使用template模板来编写组件的虚拟dom结构，然后vue组件会自动将模板compile成虚拟dom结构放入到render中执行，但是react需要编写render函数

            return (   
                //jsx语法
                <div>asdasd</div>
            )
            
        }
    })
    //利用ReactDOM对象的render方法将组件渲染到某个节点里
    ReactDOM.render(<Hello/>,document.getElementById("app"))
```

组件是通过React.createClass创建的（ES5），在es6中直接通过class关键字来创建

组件其实就是一个构造器,每次使用组件都相当于在实例化组件

react的组件必须使用render函数来创建组件的虚拟dom结构

组件需要使用ReactDOM.render方法将其挂载在某一个节点上

组件的首字母必须大写



### JSX语法糖

JSX是一种语法，全称：javascript xml

JSX语法不是必须使用的，但是因为使用了JSX语法之后会降低我们的开发难度，故而这样的语法又被成为语法糖

在不使用JSX的时候，需要使用React.createElement来创建组件的dom结构，但是这样的写法虽然不需要编译，但是维护和开发的难度很高，且可读性很差

```
var world = React.createElement('h1',{className:'abc',id:'haha'},[
    React.createElement('span',null,'Hello'),
    React.createElement('mark',null,'React')
])
            
//利用ReactDOM对象的render方法将组件渲染到某个节点里
ReactDOM.render(world,document.getElementById("app1"))
```

及时使用了JSX语法了之后，也是需要将其编译成原生的createElement的

JSX就是在js中使用的xml，但是，这里的xml不是真正的xml，只能借鉴了一些xml的语法，例如：

最外层必须有根节点、标签必须闭合

jsx借鉴xml的语法而不是html的语法原因：xml要比html严谨，编译更方便  




### 组件dom添加样式

在react里表达式的符号是 "{  }",作用和vue的表达式作用是一样的

想给虚拟dom添加行内样式，需要使用表达式传入样式对象的方式来实现：

```
 <p style = { {color:'red',fontSize:2+'em'} }>Hello world</p>

```
行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如React.createClass的配置项中、render函数里、组件原型上、外链js文件中

React推荐我们使用行内样式，因为react觉得每一个组件都是一个独立的整体

其实我们大多数情况下还是大量的在为元素添加类名、id以使用某些样式，但是需要注意的是，class需要写成className（因为毕竟是在写类js代码，会收到js规则的现在，而class是关键字）

```
<p className="bg-p" id="myp" style = { this.style }>Hello world</p>
```



### React Event

在react中，我们想要给组件的dom添加事件的话，也是 需要在行内添加的方式，事件名字需要写成小驼峰的方式，值利用表达式传入一个函数即可

注意，在没有渲染的时候，页面中没有真实dom，所以是获取不到dom的

给虚拟dom结构中的节点添加样式。在行内添加,写成驼峰形式，值是一个函数名，需要用{}包裹

```
handleClick:function () {
    alert(1)
},
render:function () {
    return (
        <div>
            <button onClick = {this.handleClick} className="click-btn">click</button>
            <button onDoubleClick = {this.handleClick} className="click-btn">click</button>
        </div>
    )
}
```



### 组件嵌套

将一个组件渲染到某一个节点里的时候，会将这个节点里原有内容覆盖

组件嵌套的方式就是将子组件写入到父组件的模板中去，且react没有Vue中的内容分发机制（slot），所以我们在一个组件的模板中只能看到父子关系

```
var Hello = React.createClass({
    render(){
        return (
            <h1>
                Hello 
                <World></World>
            </h1>
        )
    }
})
var World = React.createClass({
    render(){
        return (
            <mark>
                World-<Person/> 
            </mark>
        )
    }
})
//无状态组件
var Person =function(){
    return (<mark>lilei</mark>)
}
ReactDOM.render(<Hello/>,app)
```

>注意，react中jsx里的注释要写成{/*  */}的方式






### React中的数据承载-Props/State

数据驱动、声明式渲染：

任意的视图变化都应该由数据来控制

//$(".a").html(0)

var num = 0
function renderNum () { $(".a").html(num) }

React也是基于数据驱动(声明式)的框架，组件中必然需要承载一些数据，在react中起到这个作用的是属性和状态（props & state）

1. 属性（props）  在组件外部传入，或者内部设置，组件内部通过this.props获得

2. 状态（state）  在组件内部设置或者更改，组件内部通过this.state获得

##### 属性(props)

属性一般是外部传入的，组件内部也可以通过一些方式来初始化的设置，属性不能被组件自己更改

属性是描述性质、特点的，组件自己不能随意更改

使组件拥有属性的方式：

1. 在装载（mount）组件的时候给组件传入

传入数据的时候，除了字符串类型，其他的都应该包上表达式，但是为了规整，所有的数据传递，最好都包上{}

```
var Gouzi = React.createClass({
    render(){
        console.log(this)
        return (
            <div>
                <p>我的名字：{this.props.name}</p>
                <p>我的性别：{this.props.sex}</p>
                <p>我的年龄：{this.props.age}</p>  
                <p>我的父亲是：{this.props.father}</p>                                              
            </div>
        )
    }
})

let info = {
    sex:'male',
    father:'狗爸'
}

ReactDOM.render(<Gouzi {...info} name={"大狗子"} age={26}/>,app)
```

2. 父组件给子组件传入

父组件在嵌套子组件的时候为子组件传入，传入的方式和上面的方式一样

```
//父组件的render函数
render(){
    return (
        <div>
            <p>父组件：</p>
            <hr/>
            <Son name={'大狗子'}/>
            <Son name={'二狗子'}/>
        </div>
    )
}
```
3. 子组件自己设置

子组件可以通过getDefaultProps来设置默认的属性

getDefaultProps的值是函数，这个函数会返回一个对象，我们在这里对象里为组件设置默认属性

这种方式设置的属性优先级低，会被外部传入的属性值所覆盖
```
getDefaultProps:function () {
    console.log('getDefaultProps')
    return {
        name:'狗爸',
        sonname:'二狗子'
    }
},
//render
<p>我是{this.props.sonname}的父亲-{this.props.name}</p>
```

根据属性或状态，我们可以在render中的表达式里做一些逻辑判断，可以使用||、三元表达式、子执行函数等等

```
getName(){
    return this.props.name || '野狗子'
},
render:function () {
    let {name} = this.props
    return (
    <div>
        <p>我是子组件-{this.props.name || '野狗子'}</p>
        <p>我是子组件-{this.props.name?this.props.name:'野狗子'}</p>
        <p>我是子组件-{this.getName()}</p>
        <p>我是子组件-{(function (obj) {
            return obj.props.name || '野狗子'
        })(this)}</p>
    </div>
    )
}
```



##### 状态(state)

状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)

在组件中只能通过getInitialState的钩子函数来给组件挂载初始状态,在组件内部通过this.state获取

this.props和this.state是纯js对象,在vue中，$data属性是利用Object.defineProperty处理过的，更改$data的数据的时候会触发数据的getter和setter，但是react中没有做这样的处理，如果直接更改的话，react是无法得知的，所以，需要使用特殊的更改状态的方法：

setState(params)

在setState中传入一个对象，就会将组件的状态中键值对的部分更改，还可以传入一个函数，这个回调函数必须返回像上面方式一样的一个对象，函数可以接收prevState和props

```
//1.
let doing = this.state.doing=='学习'+props.knowledge?'玩游戏':'学习'+props.knowledge
this.setState({doing})

//2.
this.setState((prevState,props)=>{
    return {
        doing:prevState.doing=='学习'+props.knowledge?'玩游戏':'学习'+props.knowledge
    }
})
```
##### 实现下拉菜单的方式

1. 通过数据来控制元素的行内样式中display的值，或者去控制类名

```
<ul style={{display:isMenuShow?'block':'none'}}><li>国内新闻</li></ul>
...
<ul className={isMenuShow?'show':'hide'}><li>国内新闻</li></ul>
```

2. 根据数据控制是否渲染改节点、组件
```
{
    isMenuShow?<ul><li>国内新闻</li></ul>:''
}
```
3. 通过ref对dom、组件进行标记，在组件内部通过this.refs获取到之后，进行操作
```
<ul ref='content'><li>国内新闻</li></ul>
...
this.refs.content.style.display = this.state.isMenuShow?'block':'none'
```



##### 属性和状态的对比

相似点：都是纯js对象，都会触发render更新，都具有确定性（状态/属性相同，结果相同）

不同点： 

1. 属性能从父组件获取，状态不能
2. 属性可以由父组件修改，状态不能
3. 属性能在内部设置默认值 ，状态也可以
4. 属性不在组件内部修改   ，状态要改

状态只和自己相关，由自己维护

属性不要自己修改，可以从父组件获取，也可以给子组件设置

组件在运行时自己需要修改的数据其实就是状态而已








#### 组件的生命周期

react中组件也有生命周期，也就是说也有很多钩子函数供我们使用，下面是生命周期的图示：

![生命周期]('./life.jpg')

组件是一个构造器，每一次使用组件都相当于在实例化组件，在这个时候，组件就会经历一次生命周期，从实例化实例开始到这个实例销毁的时候，都是一次完整的生命周期

组件的生命周期，我们会分为三个阶段，初始化、运行中、销毁

##### 初始化阶段

1. 实例化组件之后，组件的getDefaultProps钩子函数会执行

    这个钩子函数的目的是为组件的实例挂载默认的属性

    这个钩子函数只会执行一次，也就是说，只在第一次实例化的时候执行，创建出所有实例共享的默认属性，后面再实例化的时候，不会执行getDefaultProps，直接使用已有的共享的默认属性

    理论上来说，写成函数返回对象的方式，是为了防止实例共享，但是react专门为了让实例共享，只能让这个函数只执行一次

    组件间共享默认属性会减少内存空间的浪费，而且也不需要担心某一个实例更改属性后其他的实例也会更改的问题，因为组件不能自己更改属性，而且默认属性的优先级低。

2. 执行getInitialState为实例挂载初始状态，且每次实例化都会执行，也就是说，每一个组件实例都拥有自己独立的状态呢

3. 执行componentWillMount，相当于Vue里的created+beforeMount，这里是在渲染之前最后一次更改数据的机会，在这里更改的话是不会触发render的重新执行

    多做一些初始数据的获取

4. 执行render，渲染dom

5. 执行componentDidMount ，相当于Vue里的mounted,多用于操作真实dom



##### 运行中阶段

当组件mount到页面中之后，就进入了运行中阶段，在这里有5个钩子函数，但是这5个函数只有在数据（属性、状态）发送改变的时候才会执行

1. componentWillReceiveProps

当父组件给子组件传入的属性改变的时候，子组件的这个函数才会执行

当执行的时候，函数接收的参数是子组件接收到的新参数，这个时候，新参数还没有同步到this.props上,多用于判断新属性和原有属性的变化后更改组件的状态

2. 接下来就会执行shouldComponentUpdate,这个函数的作用：

    当属性或状态发生改变后控制组件是否要更新，提高性能,返回true就更新，否则不更新，默认返回true

    接收nextProp、nextState，根据根据新属性状态和原属性状态作出对比、判断后控制是否更新

3. componentWillUpdate,在这里，组件马上就要重新render了，多做一些准备工作，千万千万，不要在这里修改状态，否则会死循环
    相当于Vue中的beforeUpdate

4. render，重新渲染dom

5. componentDidUpdate，在这里，新的dom结构已经诞生了,相当于Vue里的updated



##### 销毁阶段

当组件被销毁之前的一刹那，会触发componentWillUnmount，临死前的挣扎

相当于Vue里的beforeDestroy，所以说一般会做一些擦屁股的事情

为什么Vue中有destroyed，而react却没有componentDidUnmount

Vue在调用$destroy方法的时候就会执行beforeDestroy，然后组件被销毁，这个时候组件的dom结构还存在于页面结构中，也就说如果想要对残留的dom结构进行处理必须在destroyed处理，但是react执行完componentWillUnmount之后把事件、数据、dom都全部处理掉了，所以根本不需要其他的钩子函数了

怎么样就算组件被销毁：

1. 当父组件从渲染这个子组件变成不渲染这个子组件的时候，子组件相当于被销毁

2. 调用ReactDOM.unmountComponentAtNode(node) 方法来将某节点中的组件销毁




