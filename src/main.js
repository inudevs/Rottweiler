import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
// eslint-disable-next-line import/extensions
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import ElementUI from 'element-ui';
import moment from 'moment';

import Jovian from './jovian';

import App from './App.vue';
import router from './router';
import store from './store';
import createAPI from './axios';

// eslint-disable-next-line import/extensions
import 'normalize-scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'sweetalert2/dist/sweetalert2.min.css';
import './scss/element-variables.scss';

const api = createAPI(store);

api.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    // store.commit('logout');
    // router.push({ name: 'login' });
  }
  return Promise.reject(error);
});

moment.locale('ko');

Vue.prototype.$api = api;
Vue.prototype.$moment = moment;

Vue.use(Jovian);
Vue.use(ElementUI);
Vue.use(VueSweetalert2);
Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
