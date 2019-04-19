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



Vue.config.productionTip = false

// 使用过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
