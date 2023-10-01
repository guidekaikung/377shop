import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/amazon',
      name: 'amazon',
      component: () => import('../views/AmazonView.vue')
    },
    {
      path: '/TheCoffeeBean&TeaLeaf',
      name: 'TheCoffeeBean&TeaLeaf',
      component: () => import('../views/TheCoffeeBean&TeaLeafView.vue')
    },
    {
      path: '/starbuck',
      name: 'starbuck',
      component: () => import('../views/StarbuckView.vue')
    },
    {
      path: '/Dunkin',
      name: 'Dunkin',
      component: () => import('../views/DunkinView.vue')
    },
    {
      path: '/PeetCoffee',
      name: 'PeetCoffee',
      component: () => import('../views/PeetCoffeeView.vue')
    },
    {
      path: '/bluecup',
      name: 'bluecup',
      component: () => import('../views/BluecupView.vue')
    }
  ]
})

export default router
