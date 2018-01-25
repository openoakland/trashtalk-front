import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Auth/Login';
import Signup from '@/components/Auth/Signup';
import CleanupList from '@/components/Cleanups/CleanupList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/cleanups-list',
      name: 'CleanupList',
      component: CleanupList,
    },
  ],
});
