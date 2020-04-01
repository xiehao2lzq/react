import state from './state'
import {HOME_NAV_INFO,HOME_BANNER_INFO,HOME_SPECIALS_INFO,REMOVE_SPECIALS} from "./consts"
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState};
    switch (action.type) {
        case HOME_NAV_INFO:
            new_state.navs = action.navs;
            break;
        case HOME_BANNER_INFO:
            new_state.banners = action.banners;
            break;
        case HOME_SPECIALS_INFO:
        case REMOVE_SPECIALS:
            new_state.specials = action.specials;
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;