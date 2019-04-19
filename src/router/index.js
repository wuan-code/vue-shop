import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import * as types from '../store/type'

import home from '@/views/home/home.vue'
import login from '@/views/login/login.vue'
import forget from '@/views/forget/index.vue'
import smsForget from '@/views/forget/smsForget.vue'
import register from '@/views/register/index.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forget',
      name: '/forget',
      component: forget,
      // children: [{
      //   path: 'smsForget',
      //   // 懒加载
      //   component: resolve => require(['@/views/forget/smsForget.vue'], resolve)
      // }]
    },
    {
      path: '/forget/smsForget',
      component: smsForget,
    },
    {
      path: '/forget/newPassword',
      component: resolve => require(['@/views/forget/newPassword.vue'], resolve)
    },
    {
      path: '/register',
      component: register,
    },
  ]
})

// 导航钩子
router.beforeEach((to, from, next) => {
  // 检查登录状态
  store.commit(types.CHECKOUT_LOGIN_STATUS)
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 如果本地存在 access_token，则继续导航
    if (window.localStorage.ACCESS_TOKEN) {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
