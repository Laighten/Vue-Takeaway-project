// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

import './mock/mockServer'
import './filters' // 加载过滤器

Vue.config.productionTip = false
Vue.component(Button.name,Button) //<my-button>
Vue.use(VueLazyload,{
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store
})
