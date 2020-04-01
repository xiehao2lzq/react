// import axios from "axios"
// import qs from "querystring"
// //发送post请求  jsonp实现  json with padding  script src   CORS  
// //反向代理   proxy

// let data = {
//     "client_id": 180100031051,
//     "channel_id": 17489.0001,
//     "webp": 1,
//     "commodity_id": 10000118,
//     "pid": 10000118
// }
// //xhr.js:121 Refused to set unsafe header "Cookie"
// // let config = {
// //     headers:{
// //         Cookie:"xmuuid=XMGUEST-8F7DC110-43AC-11E9-93E0-69915DFB3463; lastsource=www.baidu.com; mstuid=1552274404130_5467; client_id=180100041086; masid=17489.0001; XM_agreement=0; OUTFOX_SEARCH_USER_ID_NCOO=1875312309.9874222; Hm_lvt_183aed755f0fd3efc9912dbf6550ec49=1552274420; ___rl__test__cookies=1552274421743; log_code=aa6b36fbc8a2bd55-5ffa6dab1a477221|https%3A%2F%2Fm.mi.com%2F; hd_log_code=31waphomelist_two_type1002014%23t%3Dproduct%26act%3Dother%26page%3Dhome%26page_id%3D26%26bid%3D3059878.2%26pid%3D10000118; pageid=0dd79591b72ef83b; mstz=||330975960.15|||; xm_vistor=1552274404130_5467_1552274404131-1552274440259; msttime=https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000118; msttime1=https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000118; Hm_lpvt_183aed755f0fd3efc9912dbf6550ec49=1552274444"
// //     }
// // }

// axios.post("/xm/v1/miproduct/view",qs.stringify(data)).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log("出错了！",err)
// })












// return new Promise((reslove,reject)=>{ //es6  node.js callback回调函数  地狱嵌套  es7  koa2 asycn await  
//     if(){
//         reslove(数据)
//     }else{
//         reject(err)
//     }
// }).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })