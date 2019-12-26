/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:32
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-25 12:46:40
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
