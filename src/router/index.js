import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SubmitShift from '../views/SubmitShift.vue'
import ShiftTimeLineView from '../views/ShiftTimeLineView.vue'
import ContactView from '../views/Contact.vue'
import AccountLinkageView from '../views/AccountLinkage.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
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
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/line',
    name: '/line',
    component: AccountLinkageView
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
