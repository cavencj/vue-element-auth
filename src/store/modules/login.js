/*
 * @Author: Caven
 * @Date: 2019-12-24 15:36:54
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-26 09:51:57
 */

const login = {
  state: {
    sessionId: sessionStorage.getItem('sessionId'),
    token: sessionStorage.getItem('token')
  },
  mutations: {
    SET_SESSION_ID(state, sessionId) {
      state.sessionId = sessionId
      sessionStorage.setItem('sessionId', sessionId)
    },
    SET_TOKEN(state, token) {
      state.token = token
      sessionStorage.setItem('token', token)
    }
  },
  actions: {
    setSessionId({ commit }, sessionId) {
      commit('SET_SESSION_ID', sessionId)
    },
    setToken({ commit }, token) {
      commit('SET_TOKEN', token)
    }
  }
}

export default login
