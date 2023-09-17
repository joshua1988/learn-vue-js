import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue';
import LoginPage from '@/views/LoginPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/main',
      component: MainPage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})

export default router;