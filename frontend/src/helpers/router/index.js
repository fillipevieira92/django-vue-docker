import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


import HomeView from '@/modules/common/pages/HomeView.vue'
import AboutView from '@/modules/common/pages/AboutView.vue'
import LoginPage from '@/modules/auth/pages/LoginPage.vue'
import RegisterPage from '@/modules/auth/pages/RegisterPage.vue'



const routes = [
  { path: '/', name: 'home', component: HomeView, meta:{auth:true}},
  { path: '/about', name: 'about', component: AboutView, meta:{auth:true}},
  { path: '/login', name: 'login', component: LoginPage, meta:{auth:false}},
  { path: '/register', name: 'register', component: RegisterPage, meta:{auth:false}},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.auth && !store.getters.userAuth){
    console.log('if')
    next({name: "login"})

  } else if (!to.meta.auth && store.getters.userAuth) {
    console.log('else if')
    next(false)
    
  } else {
    console.log('else')
    next()
  }  
})

export default router
