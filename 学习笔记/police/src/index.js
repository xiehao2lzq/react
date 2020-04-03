import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker'

//引入样式文件
import "./stylesheets/main.scss"
//引入Provider，从顶层提供数据，单项数据流
import {Provider} from "react-redux"
//引入 HashRouter
import {HashRouter as Router} from "react-router-dom"
import store from "./store"
import axios from "axios"
//默认格式
axios.defaults.headers.post['Content-Type'] = 'application/json';
ReactDOM.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 