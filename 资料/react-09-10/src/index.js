import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入通用样式
import "./stylesheets/main.scss"
//引入Provider提供者
import {Provider} from "react-redux"
import store from "./store"
//渲染app组件
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

