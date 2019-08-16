/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';

import store from './store';
import Index from './pages/Index.vue';

Vue.use(Router);

const beforeEnter = (to, from, next) => {
  const isAuth = store.state.isLogin;
  isAuth ? next() : next({ name: 'login' })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      beforeEnter,
      component: Index,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "login" */ './pages/Register.vue')
    },
  ],
});
