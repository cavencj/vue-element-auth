/*
 * @Author: Caven
 * @Date: 2019-12-24 15:45:11
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 12:51:30
 */

const getters = {
  sessionId: state => state.login.sessionId,
  token: state => state.login.token,
  sidebarState: state => state.setting.sidebarState,
  authOption: state => state.setting.authOption,
  menuList: state => state.menu.menuList,
  currentMenu: state => state.menu.currentMenu
}

export default getters
