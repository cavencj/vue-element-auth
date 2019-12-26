/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:32
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-26 14:04:34
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
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project')
      },
      {
        path: '/dept',
        name: 'dept',
        component: () => import('@/views/dept')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import('@/views/resource')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/role')
      },
      {
        path: '/log',
        name: 'log',
        component: () => import('@/views/log')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/setting')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
