import React,{Component} from "react"
import "./index.scss" 
import Swiper from "swiper"
import GroupState from "../../../../modules/group"
import {withRouter} from "react-router-dom"
class Navbar extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            activeId:0
        }
    }
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

    componentWillReceiveProps(props){
        let {pathname} = props.location;
        let index = 0;
        if(pathname === "/home/luxury"){
            index = 0 ;
        }else if(pathname === "/home/play"){
            index = 1 ;
        }
        //更改状态
        this.setState({
            activeId:parseInt(index)
        })
    }

    handleClick(e){
        let index =  e.currentTarget.getAttribute("index");
        let {replace} = this.props.history;
        switch (index) {
            case "0":
                replace("/home/luxury");
                break;
            case "1":
                replace("/home/play");
                break;
            default:
                break;
        }
        //更改状态
        // this.setState({
        //     activeId:parseInt(index)
        // })
    }


    renderSlide(){
        let {navs} = this.props;
        if(!navs) return "";
        let {activeId} = this.state;
        return navs.map((item,index)=>{ //0 1 2
            return (
                <div index={index} onClick={this.handleClick} key={item.codeId} className={"swiper-slide "+(activeId===index?"active":"")}>
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
export default withRouter(GroupState(Navbar,{
    reducer:"home",
    states:["navs"]
}));