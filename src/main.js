// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入ElementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

// 引入vuex
import store from './store'
// 引入过滤器
import * as filters from './tool/filter'

// 懒加载
import VueLazyload from 'vue-lazyload'

// 使用SVG
import './assets/svg/iconfont'


// 使用过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(ElementUI)
Vue.use(VueLazyload)


Vue.use(VueLazyload, {
  preLoad: 1.3,   //预加载的宽高比
  error: 'dist/error.png',//图片加载失败时使用的图片源
  loading: 'dist/loading.gif',//图片加载的路径
  attempt: 1//尝试加载次数
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
