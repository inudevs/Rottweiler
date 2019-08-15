import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const enhanceAccessToken = () => {
  const { token } = localStorage
  if (!token) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
enhanceAccessToken()

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: '',
    id: ''
  },
  mutations: {
    login (state, token) {
      state.isLogin = true
      state.token = token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    saveID (state, _id) {
      state.id = _id
    }
  }
})
