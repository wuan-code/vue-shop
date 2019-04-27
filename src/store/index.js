import Vue from 'vue'
import Vuex from 'vuex'

import common from './models/common'
import user from './models/user'
import init from './models/init'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    init,
    common,
    user
  }
})
export default store
