/*
通过mutation间接跟新state的多个方法
*/
import {
    RECEIVER_SHOPS,
    RECEIVER_ADDRESS,
    RECEIVER_CATEGORY,
    RECEIVER_USER_INFO,
    RESET_USER_INFO,
    RECEIVER_GOODS,
    RECEIVER_RATINGS,
    RECEIVER_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVER_SEARCH_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings,
    reqSearchShop
} from '../api'

export default{
    //异步获取地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        const geohash = state.latitude + ','+state.longitude
        const result = await reqAddress(geohash)
        //提交一个mutation
        if(result.code === 0){
            const address = result.data
            commit(RECEIVER_ADDRESS,{address})
        }
    },
    //异步获取食品分类列表
    async getCategorys({commit}){
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        //提交一个mutation
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVER_CATEGORY,{categorys})
        }
    },
    //异步获取商家列表
    async getShops({commit,state}){
        //发送异步ajax请求
        const {longitude,latitude} = state
        const result = await reqShops(longitude,latitude)
        //提交一个mutation
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVER_SHOPS,{shops})
        }
    },
    //同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECEIVER_USER_INFO,{userInfo})
    },
    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo();
        if(result.code === 0){
            const userInfo = result.data;
            commit(RECEIVER_USER_INFO,{userInfo})
        }
    },
    //异步登出
    async logout({commit,state}){
        const result = await reqLogout();
        if(result.code === 0){
            commit(RESET_USER_INFO)
        }
    },
    // 异步获取商家信息
    async getShopInfo({commit},cb){
        const result = await reqShopInfo();
        if(result.code === 0){
            const info = result.data;
            info.score = 3.5
            commit(RECEIVER_INFO,{info})
            cb && cb();
        }
    },
    // 异步获取商家评价列表
    async getShopRating({commit},callback){
        const result = await reqShopRatings();
        if(result.code === 0){
            const ratings = result.data;
            commit(RECEIVER_RATINGS,{ratings})
            callback && callback();
        }
    },
    //异步获取商家商品列表
    async getShopGoods({commit},callback){
        const result =await reqShopGoods();
        if(result.code === 0){
            const goods = result.data;
            commit(RECEIVER_GOODS,{goods})
            callback && callback();
        }
    },
    //同步更新food中的count值
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    async searchShops({commit,state},keyword){

        const geohash = state.latitude+','+state.longitude
        const result = await reqSearchShop(geohash,keyword);
        if(result.code === 0){
            const searchShops = result.data;
            commit(RECEIVER_SEARCH_SHOPS,{searchShops})
        }
    }
}