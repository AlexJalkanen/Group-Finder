import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/views/Auth'
import auth from '@/auth'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/create',
    name: 'Create',
    meta: {
      requireAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Create.vue')
  },
  {
    path: '/',
    name: 'Join',
    meta: {
      requireAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Join.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      guestOnly: true
    },
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)
  
  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('/')
  else next()
})

export default router
