/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';

import store from './store';

Vue.use(Router);

const beforeEnter = (to, from, next) => {
  const isAuth = store.state.isLogin;
  isAuth ? next() : next({ name: 'login' })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './pages/Register.vue')
    },
  ],
});
