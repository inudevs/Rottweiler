import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line import/extensions
import 'normalize-scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.prototype.$api = axios.create({
  baseURL: 'http://localhost:5000/',
});

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
