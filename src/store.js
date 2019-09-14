import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: '',
    id: '',
  },
  mutations: {
    login(state, data) {
      const { token, id } = data;
      state.isLogin = true;
      state.token = token;
      state.id = id;
    },
    logout(state) {
      state.isLogin = false;
      state.token = '';
      state.id = '';
    },
  },
  getters: {
    isAuth: state => state.isLogin,
    token: state => state.token,
  },
  plugins: [
    createPersistedState(),
  ],
});
