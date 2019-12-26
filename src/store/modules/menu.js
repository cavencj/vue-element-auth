/*
 * @Author: Caven
 * @Date: 2019-12-25 10:13:15
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 10:39:46
 */
/*
 * @Author: Caven
 * @Date: 2019-12-24 15:36:54
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 09:44:39
 */

const menu = {
  state: {
    menuList: JSON.parse(sessionStorage.getItem('menu-list')),
    currentMenu: JSON.parse(sessionStorage.getItem('current-menu'))
  },
  mutations: {
    SET_MENU_LIST(state, menuList) {
      state.menuList = menuList
      sessionStorage.setItem('menu-list', JSON.stringify(menuList))
    },

    SET_CURRENT_MENU(state, menu) {
      state.currentMenu = menu
      sessionStorage.setItem('current-menu', JSON.stringify(menu))
    }
  },
  actions: {
    setMenuList({ commit }, menuList) {
      commit('SET_MENU_LIST', menuList)
    },
    setCurrentMenu({ commit }, menu) {
      commit('SET_CURRENT_MENU', menu)
    }
  }
}

export default menu
