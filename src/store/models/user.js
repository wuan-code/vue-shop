import $axios from '@/api'
import config from './../../config'
import * as types from '../type'
import {Message} from 'element-ui'


const state = {
  users: []
}

const getters = {
  users: state => state.users.length > 0 ? state.users : JSON.parse(localStorage.getItem('users'))
}


const actions = {
  /**
   * 用户登录——异步操作（只是做demo）
   * @param commit
   * @param formData
   * @note 添加用户信息，添加token,修改用户登录状态
   * @returns {Promise.<void>}
   */
  async login({commit}, formData) {
    commit(types.TOGGLE_LOADING_STATUS)
    await $axios.post(config.login, formData).then(response => {
      commit(types.LOAD_USER_INFO, response.data)
      commit(types.USER_TOKEN, response.data.token)
      commit(types.CHECKOUT_LOGIN_STATUS)
    }).catch(error => {
      Message({
        message: error.msg,
        type: config.errorType,
        duration: 2000,
        showClose: true
      })
      return false
    }).finally(r => {
        commit(types.TOGGLE_LOADING_STATUS)
      }
    )
  },
  /**
   * 退出登录
   * @param commit
   * @note 清除localstorage 中的 token,检测登录状态
   */
  logout({commit}) {
    commit(types.CHECKOUT_LOGIN_STATUS)
    commit(types.TOGGLE_LOADING_STATUS)
    $axios.post(config.logout).then(response => {
      commit(types.USER_LOGOUT)
      commit(types.CHECKOUT_LOGIN_STATUS)
      Message({
        message: '退成成功',
        type: config.successType,
        duration: 2000,
        showClose: true
      })
    }).catch(error => {
      commit(types.TOGGLE_LOADING_STATUS)
      Message({
        message: error.msg,
        type: config.errorType,
        duration: 2000,
        showClose: true
      })
      // Promise.reject(error)
    })
  },
}

const mutations = {
  /**
   * 加载用户信息
   * @param state
   * @param users
   */
    [types.LOAD_USER_INFO] (state, users) {
    state.users = users
    window.localStorage.setItem('users', JSON.stringify(users))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

