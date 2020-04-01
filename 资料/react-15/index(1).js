import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入stylesheets/main.scss文件
import "./stylesheets/main.scss"
//引入axios-utils文件
import "./modules/axios-utils"
//引入 rem.js文件
import "./modules/rem"
//引入 HashRouter
import {HashRouter as Router} from "react-router-dom"
//引入swiper的css样式
import "swiper/dist/css/swiper.min.css"
//引入Provider
import {Provider} from "react-redux"
import store from "./store"
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

