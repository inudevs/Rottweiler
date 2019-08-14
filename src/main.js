import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line import/extensions
import 'normalize-scss';

Vue.prototype.$api = axios.create({});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
