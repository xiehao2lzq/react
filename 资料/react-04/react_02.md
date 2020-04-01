
# React框架学习


##### React中的事件对象

react中对于事件进行了处理，解决了一些兼容性问题，react事件对象上面挂载着nativeEvent，这个就是原生的事件对象

react对事件对象做了优化，如果不取值的话，值都是null



##### React中组件通信方式

父组件与子组件通信

1. 父组件将自己的状态传递给子组件，子组件当做属性来接收，当父组件更改自己状态的时候，子组件接收到的属性就会发生改变

2. 父组件利用ref对子组件做标记，通过调用子组件的方法以更改子组件的状态..



子组件与父组件通信

父组件将自己的某个方法传递给子组件，在方法里可以做任意操作，比如可以更改状态，子组件通过this.props接收到父组件的方法后调用。


兄弟组件通信

在react没有类似vue中的事件总线来解决这个问题，我们只能借助它们共同的父级组件来实现，将非父子关系装换成多维度的父子关系


复杂的非父子组件通信在react中很难处理，多组件间的数据共享也不好处理，所以我们会使用flux、redux来实现这样的功能，解决这个问题



##### React中表单元素默认值

在react中，如果需要 给表单元素设置默认value或者checked，需要设置成defaultValue/defaultChecked，否则设置默认值以后，用户无法更改



##### React-keys

我们在react中循环列表数据的时候，需要对循环出来的虚拟jsx节点传入上key这个数据，

Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。


##### 状态提升

就是如果有多个组件共享一个数据，把这个数据放到共同的父级组件中来管理


##### 组合

在vue中有一个内容分发叫slot，在react中也有实现，就是可以在使用组件的时候，在组件标签内部放入一些不固定的内容，在该组件的模板中，只有{this.props.children}来表示

```
//App
<Dialog
close={this.ToggleDialogShow} isShow={isDialogShow}
>
    <ContentA/>
    <ContentA/>
    <ContentB/>
</Dialog>

//dialog
<div style={{display:isShow?'block':'none'}} className="dialog">
    <Button handler={this.props.close} text="关闭"/>   
    {this.props.children}//这里就是slot
</div>
```






