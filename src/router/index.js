import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SubmitShift from '../views/SubmitShift.vue'
import ShiftTimeLineView from '../views/ShiftTimeLineView.vue'

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
    },
    {
      path: '/edit-shift',
      name: 'edit-shift',
      component: ShiftTimeLineView
    }
  ]
})

export default router
