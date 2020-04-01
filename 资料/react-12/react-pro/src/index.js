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
ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));

