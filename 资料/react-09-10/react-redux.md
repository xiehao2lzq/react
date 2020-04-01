##react-redux
react-redux 辅助工具  react ---> redux


核心组件
    (用在我们的最外层元素上面去使用)
    <Provider></Provider> 提供者  属性上通过store将数据派给容器组件

    <Provider store={store}>
        <App />
    </Provider>


    connect  返回一个函数，函数参数接口UI组件，返回容器组件
    connect(state=>state,dispatch=>bindActionCreators(actions,dispatch))(UI组件)

 

//redux的中间件
 增强我们dispatch的能力  实现异步请求数据  
    redux-thunk 
    redux-saga  async-await语法糖
 

1.cnpm install redux-thunk -S
2.import {createStore,applyMiddleware} from "redux"
import  reducer from "./reducer"
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk));

3.computeNum(){
    return dispath=>{
        setTimeout(() => {
            let action = {
                type:COMPUE
            }
            dispath(action);
        }, 2000);
    }
}