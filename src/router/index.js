import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registre from'@/views/Registre'
import Login from'@/views/Login'
import Vet from'@/views/Vet'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registre
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/vet/:id',
    name: 'vet',
    component: Vet
  }/* ,
  {
    path: '/about',
    name: 'About',
   
    component: () => import( webpackChunkName: "about"  '../views/About.vue')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
