import * as types from '../mutation-types';

const state = {
  login: false,
  user: {},
};

const getters = {
  isLoggedIn: state => state.login,
  userInfo: state => state.user,
};

const actions = {
  getUserInfo({ commit }) {
    const user = {
      name: 'test user',
      email: 'test@test.com',
    };
    // fetch api call here and return data
    commit(types.RECEIVE_USER_INFO, user);
  },
  login({ commit }) {
    const user = {
      name: 'test user',
      email: 'test@test.com',
    };
    commit(types.USER_LOGIN, user);
  },
};

const mutations = {
  [types.USER_LOGIN](state, user) {
    state.login = true;
    state.user = user;
  },
  [types.RECEIVE_USER_INFO](state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
