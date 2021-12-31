import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Guard from '../services/middleware'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/about',
    component: About,
    beforeEnter: Guard.auth
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
