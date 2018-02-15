/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://trashtalkdev.herokuapp.com/api/v1';

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
