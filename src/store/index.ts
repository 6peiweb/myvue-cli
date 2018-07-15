import Vue from '_vue@2.5.16@vue'
import Vuex from '_vuex@3.0.1@vuex'

Vue.use(Vuex)

const storeOptions: lp.StoreOptions = {
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: (state: any) => state.userInfo
  },
  mutations: {
    update_userInfo: (state: any, params: object) => state.userInfo = params
  },
  actions: {
    update_userInfo: (context: any, params: object) => context.commit('update_userInfo', params)
  }
}

const store = new Vuex.Store(storeOptions)

export default store
