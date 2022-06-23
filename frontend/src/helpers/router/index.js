import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/modules/common/pages/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/modules/common/pages/AboutView.vue') },
  { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/pages/LoginPage.vue') },
  { path: '/register', name: 'register', component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/pages/RegisterPage.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
