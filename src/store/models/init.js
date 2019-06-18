import * as types from '../type'
import $axios from '@/api'
import config from './../../config'
import {Message} from 'element-ui'


const state = {
  homeSwipeData: [],        // 轮播图
  homeClassify: [],        // 分类
  homeNews: [],            // 新闻
  homeGoodsList: [],     // 商品列表
}


const getters = {
  homeSwipeData: state => state.homeSwipeData,
  homeClassify: state => state.homeClassify,
  homeNews: state => state.homeNews,
  homeGoodsList: state => state.homeGoodsList
}


const actions = {
  /**
   * 首页初始化数据
   * @param dispatch
   * @returns {Promise.<void>}
   */
  async homeInit({dispatch}) {
    dispatch('initGoods')
    dispatch('getHomeInfo')
    dispatch('homeSwipe')
  },


  /**
   * 获取数据
   * @param commit
   * @returns {Promise.<void>}
   */
  async getHomeInfo({commit}) {
    await $axios.get(config.homeInfo).then(response => {
      commit(types.HOME_CLASSIFY, response.data.classify)
      commit(types.HOME_NEWS, response.data.news)
    }).catch(error => {
      Message({
        message: error.msg,
        type: config.errorType,
        duration: 2000,
        showClose: true
      })
      return false
    }).finally(r => {
      }
    )
  },

  /**
   * 获取banner的轮播图
   * @param commit
   * @returns {Promise.<void>}
   */
  async homeSwipe({commit}) {
    await $axios.get(config.homeSwipe).then(response => {
      commit(types.HOME_SWIPE, response.data)
    }).catch(error => {
      Message({
        message: error.msg,
        type: config.errorType,
        duration: 2000,
        showClose: true
      })
      return false
    }).finally(r => {
      }
    )
  },

  /**
   * 获取首页商品
   * @param commit
   * @param page
   * @returns {Promise.<void>}
   */
  async initGoods({commit}, page = 1) {
    await $axios.post(config.initGoods).then(response => {
      commit(types.HOME_GOODS_LIST, response.data)
    }).catch(error => {
      Message({
        message: error.msg,
        type: config.errorType,
        duration: 2000,
        showClose: true
      })
      return false
    }).finally(r => {
      }
    )
  },


}


/**
 * 可以添加一个传参，相似的代码，只用一个变量即可
 * @type {{[[types.HOME_SWIPE]]: ((state, data)), [[types.HOME_CLASSIFY]]: ((state, data)), [[types.HOME_NEWS]]: ((state, data)), [[types.HOME_GOODS_LIST]]: ((state, data))}}
 */
const mutations = {
  /**
   * 设置首页的banner的轮播图
   * @param state
   * @param data
   */
    [types.HOME_SWIPE](state, data){
    state.homeSwipeData = data
  },


  /**
   * 获取首页的分类
   * @param state
   * @param data
   */
    [types.HOME_CLASSIFY](state, data){
    state.homeClassify = data
  },

  /**
   * 获取首页的新闻
   * @param state
   * @param data
   */
    [types.HOME_NEWS](state, data){
    state.homeNews = data
  },

  /**
   * 获取首页的商品
   * @param state
   * @param data
   */
    [types.HOME_GOODS_LIST](state, data){
    state.homeGoodsList = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}




