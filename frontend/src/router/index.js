import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfilesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

    {
      path: '/profiles',
      name: 'profiles',
      component: ProfileView
    },

    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: async () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
