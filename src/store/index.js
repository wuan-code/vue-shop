import Vue from 'vue'
import Vuex from 'vuex'

import common from './models/common'
import user from './models/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    user
  }
})
export default store
