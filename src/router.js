import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Callback from './views/Callback.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
     
  ],
});
