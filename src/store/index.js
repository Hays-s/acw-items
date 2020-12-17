import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存储用户是否登录
    isLogined: localStorage.getItem('isLogined') || 0,
    info:JSON.parse(localStorage.getItem('info')) || {},
  },
  mutations: {
    loginMutation(state, payload) {
      //改变用户登录的状态
      state.isLogined = 1;
      //将获取到的登录用户信息存储到info中去
      state.info = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
