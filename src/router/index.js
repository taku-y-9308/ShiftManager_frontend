import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SubmitShift from '../views/SubmitShift.vue'
import ShiftTimeLineView from '../views/ShiftTimeLineView.vue'
import ContactView from '../views/Contact.vue'
import AccountLinkageView from '../views/AccountLinkage.vue'
import Login from '../views/Login.vue'
import { CheckAuthenticated } from './CheckAuthentication'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home,
    meta: {AuthenticationRequired: true},
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {AuthenticationRequired: true},
  },
  {
    path: '/submit-shift',
    name: 'submit-shift',
    component: SubmitShift,
    meta: {AuthenticationRequired: true},
  },
  {
    path: '/edit-shift',
    name: 'edit-shift',
    component: ShiftTimeLineView,
    meta: {AuthenticationRequired: true},
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {AuthenticationRequired: true},
  },
  {
    path: '/line',
    name: '/line',
    component: AccountLinkageView,
    meta: {AuthenticationRequired: true},
  },
  {
    path:'/login',
    name:'login',
    component:Login,
    meta: {AuthenticationRequired: false},
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})



router.beforeEach(async function(to,from,next){
  if(to.matched.some(record => record.meta.AuthenticationRequired)){
    const isAuthenticated = await CheckAuthenticated()
    if(isAuthenticated){
      console.log('AuthenticatedUser')
      next()
    }else{
      console.log('Un-AuthenticatedUser')
      next('/login')
    }
  }else{
    next()
  }
  
})

export default router
