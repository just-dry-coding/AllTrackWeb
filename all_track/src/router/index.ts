import { createRouter, createWebHistory } from 'vue-router'
import LocationView from '../views/LocationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LocationView
    },
    {
      path: '/enter/:location-name',
      name: 'enter',
      component: () => import('../views/EnterEntryView.vue')
    }
  ]
})

export default router
