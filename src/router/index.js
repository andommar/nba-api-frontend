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
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/team/:name',
    name: 'team-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamView.vue'),

  },
  {
    path: '/players',
    name: 'players-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlayersView.vue'),

  },
  {
    path: '/player/:id',
    name: 'player-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlayerView.vue'),

  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
