/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:42
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 12:51:55
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import login from './modules/login'
import setting from './modules/setting'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    login,
    setting,
    menu
  }
})
