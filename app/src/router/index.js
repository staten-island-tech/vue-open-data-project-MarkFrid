import { createRouter, createWebHistory } from 'vue-router'

import FlintAndSteel from '@/views/FlintAndSteel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FlintAndSteel',
      component: FlintAndSteel,
    },
    {
      path: '/enderpearl',
      name: 'enderpearl',
      component: () => import('../views/EnderPearlChart.vue'),
    },
    {
      path: '/IAmSteve',
      name: 'IAmSteve',
      component: () => import('../views/IAmSteveChart.vue'),
    },
  ],
})

export default router
