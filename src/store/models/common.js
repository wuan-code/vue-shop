import * as types from '../type'
import $axios from '@/api'
import api from './../../config'
import jwtToken from './../../tool/jwt-token'


// import * as api from '../../api/config'
import {Message, Loading} from 'element-ui'


/**
 * 数据仓库
 * @type {{isLogined: boolean, isLoading: boolean, loadingInstance: null}}
 */
const state = {
  isLogined: false,         // 登录状态
  isLoading: false,         // 加载状态
  loadingInstance: null,    // 加载实例
}

/**
 * 获取数据
 * @type {{isLogined: ((p1:*)=>boolean), isLoading: ((p1:*)=>boolean)}}
 */
const getters = {
  isLogined: state => state.isLogined,
  isLoading: state => state.isLoading,
}


/**
 * 行为操作
 * @type {{logout: (({commit}:{commit: *}))}}
 */
const actions = {

  /**
   * 退出登录
   * @param commit
   * @note 如果用户退出成功,清除localstorage的token
   */
  logout({commit}) {
    // 改变loading状态
    commit(types.TOGGLE_LOADING_STATUS)
    $axios.post(api.logout).then(response => {
      commit(types.TOGGLE_LOADING_STATUS)
      if (response.data.logout) {
        commit(types.USER_LOGOUT)
        // 检测登录状态
        commit(types.CHECKOUT_LOGIN_STATUS)
        Message({
          message: '退成成功。',
          type: 'success',
        })
      }
    }).catch(error => {
      commit(types.TOGGLE_LOADING_STATUS)
      Message({
        message: api.errorMsg,
        type: api.errorType,
        duration: 2000,
        showClose: true
      })
      Promise.reject(error)
    })
  },

  /**
   * 清除缓存，重新登录
   * @param commit
   * @note 退出登录，修改登录状态，清除用户信息
   */
  resetLogin({commit}){
    // 改变loading状态
    if (!state.isLogined) {
      Message({
        message: '未登录，请重新操作',
        type: api.errorType,
        duration: 2000,
        showClose: true
      })
    }
    commit(types.USER_LOGOUT)
    commit(types.CHECKOUT_LOGIN_STATUS)
    commit(types.LOAD_USER_INFO, {})
    Message({
      message: '缓存清理成功，可重新登录',
      type: api.successType,
      duration: 2000,
      showClose: true
    })
  },
}

/**
 * 实际操作数据方法
 */
const mutations = {
  /**
   * 检验登录状态
   * @param state
   * @note 根据access_token判断是否登录
   */
    [types.CHECKOUT_LOGIN_STATUS](state) {
    state.isLogined = !!jwtToken.getToken()
  },

  /**
   * Loading 动画
   * @param state
   * @param quit  是否进行 （false：不进行，加载loading；true:进行，不加载loading）
   * @ 判断是否需要显示loading
   */
    [types.TOGGLE_LOADING_STATUS](state, quit = false) {
    if (!quit) {
      state.isLoading = !state.isLoading
      if (state.isLoading) {
        // Loading 为单例
        state.loadingInstance = Loading.service({
          text: '操作中...',
        })
      }
      // 如果加载已结束，则关闭它
      if (!state.isLoading) {
        if (state.loadingInstance) {
          state.loadingInstance.close()
        }
      }
    }
  },

  /**
   * 用户退出
   * @param state
   * @note 清除用户的 ACCESS_TOKEN
   *
   */
    [types.USER_LOGOUT](state) {
    jwtToken.removeToken()
    window.localStorage.removeItem('users')
  },

  /**
   * 添加用户token
   * @param state
   * @param token
   */
    [types.USER_TOKEN](state, token){
      jwtToken.setToken(token)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}




