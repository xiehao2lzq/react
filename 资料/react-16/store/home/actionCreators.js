import {HOME_NAV_INFO,HOME_BANNER_INFO} from "./consts"
import {Get} from "../../modules/axios-utils"
export default {
    getNavInfo(callback){
        return dispatch=>{
            Get({
                url:"/sk/api/home/home_page_head?c_platform_type=0&c_app_ver=6.0.0&c_upk="
            }).then(res=>{
                let navs = res.data.tabs;//数据获取了
                callback && callback();
                dispatch({type:HOME_NAV_INFO,navs});
            })
        }
    },
    getBannerInfo(callback){
        return dispatch=>{
            Get({
                url:"/sk/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk="
            }).then(res=>{
                let banners = res.data.floors[0].list;//数据获取了
                callback && callback();
                dispatch({type:HOME_BANNER_INFO,banners});
            })
        }
    }
}