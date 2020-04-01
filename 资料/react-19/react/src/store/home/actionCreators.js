import {
    HOME_NAV_INFO,
    HOME_BANNER_INFO,
    HOME_SPECIALS_INFO,
    REMOVE_SPECIALS
} from "./consts"
import {Get} from "../../modules/axios-utils"
export default {
    getNavInfo(callback){
        return dispatch=>{
            Get({
                url:"/api/home/home_page_head?c_platform_type=0&c_app_ver=6.0.0&c_upk="
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
                url:"/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk="
            }).then(res=>{
                let banners = res.data.floors[0].list;//数据获取了
                callback && callback();
                dispatch({type:HOME_BANNER_INFO,banners});
            })
        }
    },
    //"/sk/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk="
    getSpecialsInfo(url){ //redux-thunk   redux-saga  Worker
        return dispatch=>{
            Get({
                url
            }).then(res=>{
                let floors = res.data.floors;//数据获取了
                let specials = [];
                floors.forEach(item=>{
                    if(item.type === "46"){
                        specials = specials.concat(item.list);//将所有type为46的  list对应的数组进行拼接
                    }
                })
                dispatch({type:HOME_SPECIALS_INFO,specials});
            })
        }
    },
    removeSpecials(){
        return {type:REMOVE_SPECIALS,specials:null}
    }
}