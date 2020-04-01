import React,{Component} from "react"
import GroupState from "../../../../modules/group"
import Swiper from "swiper"

//无状态组件  就是一个函数
const SwiperItem = props=>{
    return (
        <div className="swiper-slide">
            <img width="100%" src={props.item.img} alt=""/>
        </div> 
    )
}  


class Banner extends Component{
    componentDidMount(){ 
        let {banners} = this.props;
        if(banners){//加载进来的时候，redux里面的数据有的话
            this.initSwiper()
            return false;
        }
        //异步请求数据
        this.props.getBannerInfo(()=>{
            //进行轮播图的实例化
            setTimeout(() => {
                this.initSwiper()
            }, 0);
        });
    }

    initSwiper(){
        new Swiper(".home-banner",{
            loop:true,
            pagination:{
                el:".swiper-pagination"
            }
        });
    }

    //renderSlide
    renderSlide(){
        let {banners} = this.props;
        if(!banners) return "";
        return banners.map((item,index)=>{
            return (
                <SwiperItem key={index} item={item}/>
            )
        })       
    }



    //1.初始化渲染的时候 render函数会执行
    //2.可能banners由null变成了具有内容的数组，而Banner目前是UI组件，一旦状态发生改变了
    //容器组件就可以给Banner组件传递新的属性，属性发生变化，render函数就会重新执行了！
    //3.可能navs由null变成了具有内容的数组，而......
    render(){
        console.log("banner",this)
        return (
            <div className="swiper-container home-banner">
                <div className="swiper-wrapper">
                    {
                        this.renderSlide()
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default GroupState(Banner,{
    reducer:"home",
    states:["banners"]
});