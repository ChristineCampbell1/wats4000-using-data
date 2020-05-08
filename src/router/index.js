import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import Soundasaurus from '@/views/Soundasaurus'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  {
    path: '/soundasaurus',
    name: 'Soundasaurus',
    component: Soundasaurus
  }
]

const router = new VueRouter({
  routes
})

export default router
