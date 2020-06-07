import Home from '@/views/Home.vue'
import Bio from '@/views/Bio.vue'
import Projects from '@/views/Projects.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'is-active',
})

export default router
