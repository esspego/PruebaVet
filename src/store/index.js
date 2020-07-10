import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    token: "",
  },
  mutations: {
    setToken(state, token){
      state.token = token;
      state.isAuth = true
      window.localStorage.setItem("token", token)
    },
    logout(state){
      state.token="";
      state.isAuth= false
      window.localStorage.removeItem("token")
    }
  },
  actions: {
  },
  modules: {
  }
})
