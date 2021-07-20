/*
直接更新state的多个方法的对象
*/
import {
    RECEIVER_SHOPS,
    RECEIVER_ADDRESS,
    RECEIVER_CATEGORY,
    RECEIVER_USER_INFO,
} from './mutation-types'

export default{
    [RECEIVER_ADDRESS] (state,{address}){
        state.address = address;
    },
    [RECEIVER_CATEGORY] (state,{categorys}){
        state.categorys = categorys;
    },
    [RECEIVER_SHOPS] (state,{shops}){
        state.shops = shops;
    },
    [RECEIVER_USER_INFO] (state,{userInfo}){
        state.userInfo = userInfo;
    }
}