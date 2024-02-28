import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" , webpackPrefetch: true */ '../views/AboutView.vue'),
    children: [
      {
        path: '',
        component:  () => import('../views/AboutMain.vue'),
      },
      {
        path: 'one',
        component:   () => import('../views/AboutOne.vue'),
      },
      {
        path: 'two',
        component: () => import('../views/AboutTwo.vue') ,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
