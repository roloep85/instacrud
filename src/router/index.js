import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userView from '../views/Users/View.vue'
import userCreate from '../views//Users/Create.vue'
import userEdit from '../views//Users/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: userView
    },
    {
      path: '/users/create',
      name: 'userCreate',
      component: userCreate
    },
    {
      path: '/users/edit/:id',
      name: 'userEdit',
      component: userEdit
    }
  ]
})

export default router
