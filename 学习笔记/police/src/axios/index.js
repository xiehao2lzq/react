/**
 *
 * ajax全局配置
 *
 */
import axios from 'axios';
// axios 配置
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.get['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.delete['Content-Type'] = 'application/json'; //配置请求头
axios.defaults.headers.put['Content-Type'] = 'application/json'; //配置请求头

// 当实例创建时设置默认配置
axios.defaults.baseURL = 'http://47.103.36.248:9000';


//请求拦截器
axios.interceptors.request.use(
    config => {
      // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = sessionStorage.getItem('Authorization');
      token && (config.headers.Authorization = token);
      return config;
    },
    error => {
      return Promise.error(error);
    })
  //响应拦截器
  axios.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 返回 401 清除token信息并跳转到登录页面
            sessionStorage.removeItem('Authorization')
            window.location.href = '#/';
            break;
          default:
            break;
        }
      }
      return Promise.reject(error.response) // 返回接口返回的错误信息
    });

export default axios;