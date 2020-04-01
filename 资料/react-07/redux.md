cnpn run eject

### redux 架构  

redux有四个组成部分：

store用来存储数据 
reducer：真正的来管理数据
actionCreator：创建action，交由reducer处理
view： 用来使用数据，在这里，一般用react组件来充当

  
### 使用的方法

1. 创建store

    从redux工具中取出createStore去生成一个store

2. 创建一个reducer，然后将其传入到createStore中辅助store的创建

    reducer是一个纯函数，接收当前状态和action，返回一个状态，返回什么，store的状态就是什么，需要注意的是，不能直接操作当前状态，而是需要返回一个新的状态

    想要给store创建默认状态其实就是给reducer一个参数创建默认值

3. 组件通过调用store.getState方法来使用store中的数据

4. 组件产生用户操作，调用actionCreator的方法创建一个action，利用store.dispatch方法传递给reducer

5. reducer对action上的标示性信息做出判断后对新状态进行处理，然后返回新状态，这个时候store的数据就会发生改变


6. 我们可以在组件中，利用store.subscribe方法去订阅数据的变化，也就是可以传入一个函数，当数据变化的时候，传入的函数会执行，在这个函数中让组件去获取最新的状态