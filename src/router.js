/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Index from './pages/Index.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue'),
      meta: {
        forbidAuth: true,
      },
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './pages/Register.vue'),
      meta: {
        forbidAuth: true,
      },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const { isAuth } = store.getters;
  if (to.meta.requireAuth) {
    isAuth ? next() : next({ name: 'login' });    
  } else if (to.meta.forbidAuth) {
    !isAuth ? next() : next({ name: 'home' })    
  } else next();
});

export default router;
