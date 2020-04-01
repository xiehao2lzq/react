import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入stylesheets/main.scss文件
import "./stylesheets/main.scss"
//引入axios-utils文件
import "./modules/axios-utils"
//引入 rem.js文件
import "./modules/rem"
ReactDOM.render(<App />, document.getElementById('root'));

