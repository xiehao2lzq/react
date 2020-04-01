import Get from "./Get"
import Post from "./Post"
import {Component} from "react"


//为了可以让react组件通过this.$post 或者 this.$get来去使用axios发送数据
Component.prototype.$post = Post;
Component.prototype.$get = Get;


//actionCreators里面可不可以发送请求？
export {
    Get,
    Post
}
