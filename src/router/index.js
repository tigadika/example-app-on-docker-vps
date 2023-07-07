import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue'
import Login from '../views/Login.vue'
import Form from '../views/Form.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeVue
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/add',
      component: Form
    },
  ]
})

//! disini harus ada navigationn guard

export default router
