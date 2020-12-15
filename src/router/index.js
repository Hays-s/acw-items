import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
/////////////////测试案例开始/////////////////////
// import Header from '../testing/Header.vue'
// import Button from '../testing/Button.vue'
// import Field from '../testing/Field.vue'
// import Navbar from '../testing/Navbar.vue' 
// import Infinite from '../testing/Infinite.vue'
/////////////////测试案例结束/////////////////////
/////////////////项目实践开始/////////////////////
// import Register from '../views/Register.vue'
// import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
// import Article from '../views/Article.vue'
/////////////////项目实践结束/////////////////////
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/quesansw',
    name: 'quesansw',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quesansw" */ '../views/Quesansw.vue')
  },
  {
    path: '/answer/:id',
    name: '/answer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "/answer" */ '../views/Answer.vue')
  },
  {
    path: '/search',
    name: '/search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "/search" */ '../views/Search.vue')
  },
  {
    path: '/qamatch',
    name: '/qamatch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "/qamatch" */ '../views/QaMatch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
