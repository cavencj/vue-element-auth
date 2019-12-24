/*
 * @Author: Caven
 * @Date: 2019-12-23 13:28:19
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-23 13:58:38
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const hub = new Vue()

class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    // 添加element-ui
    Vue.use(ElementUI)

    // 定义全局总线
    Vue.use({
      install(Vue, options) {
        Vue.prototype.$hub = hub
      }
    })
  }
  install() {
    return Promise.all([import('@/components'), import('@/loader/HttpLoader')])
  }
}

const loader = new AppLoader()
export default loader
