/*
 * @Author: Caven
 * @Date: 2019-12-24 15:36:54
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 12:23:27
 */

const setting = {
  state: {
    sidebarState: 'collapse',
    authOption: ''
  },
  mutations: {
    SET_SIDEBAR_STATE(state, val) {
      state.sidebarState = val
    },
    SET_AUTH_OPTION(state, authOption) {
      state.authOption = authOption
    }
  },
  actions: {
    setSidebarState({ commit }, val) {
      commit('SET_SIDEBAR_STATE', val)
    },
    setAuthOption({ commit }, authOption) {
      commit('SET_AUTH_OPTION', authOption)
    }
  }
}

export default setting
