import $axios from '@/api'
import * as apiConfig from '../../api/config.js'
import * as types from '../type'
import {Message} from 'element-ui'


const state = {
  users: []
}

const getters = {
  users: state => state.users.length>0 ? state.users : JSON.parse(sessionStorage.getItem('users'))
}


const actions = {
  /**
   * 用户登录——异步操作（只是做demo）
   * @param commit
   * @param formData
   * @returns {Promise.<void>}
   */
  async login({commit}, formData) {
    commit(types.TOGGLE_LOADING_STATUS)
    await $axios.post(apiConfig.login, formData).then(response => {
      commit(types.LOAD_USER_INFO, response.data)
      // 添加token
      commit(types.USER_TOKEN,response.data.token)
      // 修改用户登录状态
      commit(types.CHECKOUT_LOGIN_STATUS)

      return true
    }).catch(error => {
      Message({
        message: error.msg,
        type: apiConfig.errorType,
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
   */
  logout({commit}) {
    commit(types.CHECKOUT_LOGIN_STATUS)
    commit(types.TOGGLE_LOADING_STATUS)
    $axios.post(apiConfig.logout).then(response => {
      // 清除 localstorage 中的 ACCESS_TOKEN
      commit(types.USER_LOGOUT)
      // 检测登录状态
      commit(types.CHECKOUT_LOGIN_STATUS)
      Message({
        message: '退成成功',
        type: apiConfig.successType,
        duration: 2000,
        showClose: true
      })
    }).catch(error => {
      commit(types.TOGGLE_LOADING_STATUS)
      Message({
        message: error.msg,
        type: apiConfig.errorType,
        duration: 2000,
        showClose: true
      })
      // Promise.reject(error)
    })
  },
}

const mutations = {
  [types.LOAD_USER_INFO] (state, users) {
    state.users = users
    sessionStorage.setItem('users', JSON.stringify(users))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

