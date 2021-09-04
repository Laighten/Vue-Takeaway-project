/*
直接更新state的多个方法的对象
*/
import Vue from 'vue';
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
    },
    [RESET_USER_INFO] (state){
        state.userInfo = {};
    },
    
    [RECEIVER_GOODS] (state,{goods}){
        state.goods = goods
    },
    [RECEIVER_RATINGS] (state,{ratings}){
        state.ratings = ratings
    },
    [RECEIVER_INFO] (state,{info}){
        state.info = info
    },
    [INCREMENT_FOOD_COUNT] (state,{food}){
       if(!food.count){ //第一次增加
           //food.count = 1;
           Vue.set(food,"count",1);
           state.cartFoods.push(food)
       }else{
           food.count++;
       }
    },
    [DECREMENT_FOOD_COUNT] (state,{food}){
        if(food.count){ //只有有值时才去见见
            food.count--
            if(food.count === 0){
                //将food从cartFoods中移除 
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART] (state){
        // 清除food中的count
        state.cartFoods.forEach(food=>food.count = 0)
        // 移除购物车中所有购物项
        state.cartFoods = []
    },
    [RECEIVER_SEARCH_SHOPS] (state,{searchShops}){
        state.searchShops = searchShops;
    },
}