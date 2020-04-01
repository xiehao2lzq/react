// import {createStore} from "redux"
const createStore = require("redux").createStore;
// import  reducer from "./reducer"
const reducer = require("./reducer");
const store = createStore(reducer);

//store.getState就可以获取reducer返回的状态
console.log("store获取到reducer这边的数据为：",store.getState())
// export default store;
module.exports = store;