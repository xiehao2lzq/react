import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "./actionCreators"

// GroupHome(Banner,{
//     reducer:"home",
//     states:["banners"]
// });

//function (uicom,options)(
//    return connect(state=>state,dispatch=>binadActionCreators(actionCreators,dispatch))(uicom)
//)

const GroupState = (UIComponent,options)=>{
    return connect(state=>{
        if(!options) return state;  //navs banners UserInfo
        let {states} = options;
        if(!states) return state[options.reducer] //bavs banners
        let _state = {};
        states.forEach(item=>{
            _state[item] = state[options.reducer][item]; //banners
        })
        return _state;
    },dispatch=>{
        if(!options){
            let actions = {};
            for(var  key in actionCreators){
                //actions={hom1,hom2,common1,comm2}
               actions = {...actionCreators[key]};
            }
            return bindActionCreators(actions,dispatch)
        }
        return bindActionCreators(actionCreators[options.reducer],dispatch)
    })(UIComponent)

}
export default GroupState;