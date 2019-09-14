import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

import Jovian from './jovian';

import App from './App.vue';
import router from './router';
import store from './store';
import createAPI from './axios';

// eslint-disable-next-line import/extensions
import 'normalize-scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'sweetalert2/dist/sweetalert2.min.css';

const api = createAPI(store);

api.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    store.commit('logout');
    router.push({ name: 'login' });
  }
  return Promise.reject(error);
});

Vue.prototype.$api = api;

Vue.use(Jovian);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
