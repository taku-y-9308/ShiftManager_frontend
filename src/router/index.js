import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SubmitShift from '../views/SubmitShift.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/submit-shift',
      name: 'submit-shift',
      component: SubmitShift
    }
  ]
})

export default router
