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
  ],
})

export default router
