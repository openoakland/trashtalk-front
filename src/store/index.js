import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/userAuth';

Vue.use(Vuex);

// eslint-disable-next-line
const store = new Vuex.Store({
  modules: {
    Auth,
  },
});

export default store;
