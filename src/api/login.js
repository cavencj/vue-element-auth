/*
 * @Author: Caven
 * @Date: 2019-12-25 10:15:19
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 10:17:54
 */

export function login(data) {
  return global.Http.post('./login', {
    data
  })
}

export function logout(data) {
  return global.Http.post('./logout', {
    data
  })
}
