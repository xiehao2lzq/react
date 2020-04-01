import React,{Component} from "react"
import "./index.scss" 
import Swiper from "swiper"
import GroupState from "../../../../modules/group"
class Navbar extends Component{

    componentDidMount(){
        let {navs} = this.props;
        if(navs) {
            this.initSwiper()
            return false;
        } 
        //异步请求数据
       this.props.getNavInfo(()=>{ 
           setTimeout(() => { //异步操作  会等到所有同步操作结束完成后才会进入此回调函数
                this.initSwiper();//进行实例化操作
           },0);
        }); 
    }

    //数据改变引发dom重新render完毕的时候，才会进入此钩子函数
    //这种方案虽然可以，但是一些无关数据的更新，这个钩子函数也会执行！
    // componentDidUpdate(){
    //     if(!this.navSwiper) this.initSwiper();
    // }

    //实例化Swiper
    initSwiper(){
        this.navSwiper = new Swiper(".home-navbar",{
            slidesPerView :'auto'
        })
    }

    renderSlide(){
        let {navs} = this.props;
        if(!navs) return "";
        return navs.map(item=>{
            return (
                <div key={item.codeId} className="swiper-slide">
                    <span>{item.title}</span>
                </div>
            )
        })
    }

    //我只需要监控navs的变化就可以了，banners/其他与我这个组件无关的数据变化了我就不需要执行组件的更新操作
    //该钩子函数可以提升react性能
    // shouldComponentUpdate(props,state){ //属性或者状态改变的时候，此钩子函数才会执行
    //     if(props.navs !== this.props.navs){ //navs数据  banners数据改变了
    //         return true;
    //     }
    //     return false;
    // }

    render(){
        console.log("navbar",this);
        return (
            <div className="swiper-container home-navbar">
                <div className="swiper-wrapper">
                    {
                        this.renderSlide()
                    }
                </div>
            </div>
        )
    }
}
export default GroupState(Navbar,{
    reducer:"home",
    states:["navs"]
});