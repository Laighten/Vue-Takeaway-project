import Vue from 'vue' 
import VueRouter from 'vue-router'

// 路由懒加载
const Msite = ()=>import('../pages/Msite/Msite.vue');
const Search = ()=>import('../pages/Search/Search.vue')
const Order = ()=>import('../pages/Order/Order.vue')
const Profile = ()=>import('../pages/Profile/Profile.vue')
const Login = ()=>import('../pages/Login/Login.vue')
const Shop = ()=>import('../pages/Shop/Shop.vue')
const ShopGoods = ()=>import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopInfo = ()=>import('../pages/Shop/ShopInfo/ShopInfo.vue')
const ShopRatings = ()=>import('../pages/Shop/ShopRatings/ShopRatings.vue')

Vue.use(VueRouter);

export default new VueRouter({ 
    routes: [ 
       { 
            path: '/msite', 
            component: Msite,
            meta:{
                showFooter: true
            }
        },
        { 
            path: '/search', 
            component: Search, 
            meta:{
                showFooter: true
            }
        },
        { 
            path: '/order', 
            component: Order, 
            meta:{
                showFooter: true
            }
        },
        { 
            path: '/profile', 
            component: Profile, 
            meta:{
                showFooter: true
            }
        }, 
        { 
            path: '/', 
            redirect:'/msite',
        },
        { 
            path: '/Login', 
            component: Login, 
        },
        { 
            path: '/shop', 
            component: Shop,
            children:[
                { 
                    path: '/shop/goods', 
                    component: ShopGoods, 
                }, 
                { 
                    path: '/shop/info', 
                    component: ShopInfo, 
                },
                { 
                    path: '/shop/ratings', 
                    component: ShopRatings, 
                },
                { 
                    path: '', 
                    redirect:'/shop/goods',
                },
            ] 
        }
    ] 
})