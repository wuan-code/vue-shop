import * as types from '../type'
import $axios from '@/api'
import api from './../../config'


// import * as api from '../../api/config'
import {Message, Loading} from 'element-ui'


const state = {
  categoryList: {},         // 所有商品分类列表
}


const getters = {
  categoryList: state => state.categoryList,
}


const actions = {

  /**
   * 获取所有商品列表的数据
   * @param commit
   * @note 如果用户退出成功,清除localstorage的token
   */
  categoryInit({commit}) {
    // 改变loading状态
    commit(types.TOGGLE_LOADING_STATUS)
    $axios.get(api.category).then(response => {
      commit(types.CATEGORY_LIST, response.data)
    }).catch(error => {
      Message({
        message: api.errorMsg,
        type: api.errorType,
        duration: 2000,
        showClose: true
      })
      Promise.reject(error)
    }).finally(r => {
        commit(types.TOGGLE_LOADING_STATUS)
      }
    )
  },

}

/**
 * 实际操作数据方法
 */
const mutations = {

  [types.CATEGORY_LIST](state, data) {
    state.categoryList = data
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}




