
# React框架学习


##### create-react-app 脚手架  

cnpm install create-react-app -g
npm install  -g  yarn

create-react-app my-app //生成一个react开发模板在my-app目录
//生成的过程特别缓慢，可以使用yarn工具来下载，也就是说先去下载安装yarn 



当我们要进行二次配置的时候，需要找到node_modules文件夹里的react-scripts进行配置，但是当我们执行npm run eject就可以将配置文件抽出，方便开发配置


<!-- 当web页面被用于Android主页面使用时的配置文件 -->
<!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> -->


service worker是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动更新等任务。
registerServiceWorker就是为react项目注册了一个service worker，用来做资源的缓存，
这样你下次访问时，就可以更快的获取资源。而且因为资源被缓存，所以即使在离线的情况下也可以访问应用





##### 无状态组件

当我们使用某些组件的时候，发现，该组件不需要拥有自己的状态，只需要接收到外界传入的属性之后做出相应的反应即可

这样的话，我们可以利用纯函数的方式将其制作成无状态组件，提高性能
```
import React from 'react'

const Button = (props)=>{
	return <button onClick={props.handler}>我要花钱</button>
}

export default Button
```




##### redux
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。有两个方面，它没涉及。

* 代码结构 
* 组件之间的通信

2014年 Facebook 提出了 Flux 架构的概念，引发了很多的实现。2015年，Redux 出现，将 Flux 与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

如果你不知道是否需要 Redux，那就是不需要它

只有遇到 React 实在解决不了的问题，你才需要 Redux


简单说，如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。

* 用户的使用方式非常简单
* 用户之间没有协作
* 不需要与服务器大量交互，也没有使用 WebSocket
* 视图层（View）只从单一来源获取数据

需要使用redux的项目:

* 用户的使用方式复杂
* 不同身份的用户有不同的使用方式（比如普通用户和管理员）
* 多个用户之间可以协作
* 与服务器大量交互，或者使用了WebSocket
* View要从多个来源获取数据

从组件层面考虑，什么样子的需要redux：

* 某个组件的状态，需要共享
* 某个状态需要在任何地方都可以拿到
* 一个组件需要改变全局状态
* 一个组件需要改变另一个组件的状态


redux的设计思想：

1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面（唯一数据源）。


redux的流程：

1.store通过reducer创建了初始状态
2.view通过store.getState()获取到了store中保存的state挂载在了自己的状态上
3.用户产生了操作，调用了actions 的方法
4.actions的方法被调用，创建了带有标示性信息的action
5.actions将action通过调用store.dispatch方法发送到了reducer中
6.reducer接收到action并根据标识信息判断之后返回了新的state
7.store的state被reducer更改为新state的时候，store.subscribe方法里的回调函数会执行，此时就可以通知view去重新获取state

> 注意：flux、redux都不是必须和react搭配使用的，因为flux和redux是完整的架构，在学习react的时候，只是将react的组件作为redux中的视图层去使用了。




reducer必须是一个纯函数：

reducer是state最终格式的确定。它是一个纯函数，也就是说，只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。
reducer对传入的action进行判断，然后返回一个通过判断后的state，这就是reducer的全部职责



Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。

纯函数是函数式编程的概念，必须遵守以下一些约束。

不得改写参数

不能调用系统 I/O 的API

不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象，请参考下面的写法。
```
// State 是一个对象
function reducer(state, action) {
  return Object.assign({}, state, { thingToChange });
  // 或者
  return { ...state, ...newState };
}

// State 是一个数组
function reducer(state, action) {
  return [...state, newItem];
}
```

Redux只通过比较新旧两个对象的存储位置来比较新旧两个对象是否相同（译者注：也就是Javascript对象浅比较）。如果你在reducer内部直接修改旧的state对象的属性值，那么新的state和旧的state将都指向同一个对象。因此Redux认为没有任何改变，返回的state将为旧的state。





