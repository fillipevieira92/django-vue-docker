import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const routes = [
  { path: '/', name: 'home', component: () => import('@/modules/common/pages/HomePage.vue'), meta:{auth:true}},
  { path: '/about', name: 'about', component: () => import('@/modules/common/pages/AboutPage.vue'), meta:{auth:true}},
  { path: '/login', name: 'login', component: () => import('@/modules/auth/pages/LoginPage.vue'), meta:{auth:false}},
  { path: '/register', name: 'register', component: () => import('@/modules/auth/pages/RegisterPage.vue'), meta:{auth:false}},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.auth && !store.getters.userAuth){
    next({name: "login"})

  } else if (!to.meta.auth && store.getters.userAuth) {
    next(false)
    
  } else {
    next()
  }  
})

export default router
