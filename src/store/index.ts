import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'hhhh'
  },
  actions: {
    setUsername({ commit }, payload) {
      commit('SET_USERNAME', payload)
    }
  },
  mutations: {
    SET_USERNAME(state, payload) {
      state.username += payload
    }
  },
  getters: {
    getterUsername(state) {
      return state.username + 1
    }
  },
  modules: {}
})
