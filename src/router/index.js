import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Aichong from '../views/Aichong.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/Personal.vue'
import Order from '../views/Order.vue'
Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    name: 'index',
    component: Index
  },
  // 商品列表页面
  {
    path:'/aichong',
    name:'aichong',
    component: Aichong
  },
  //详情页
  {
    path:'/details/:lid',
    component:()=>import(/*webpackChunkName:"details" */ '../views/Detauls.vue')
  },

  // 爱宠问答页
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
  },
  //个人中心
  {
    path:'/personal',
    name:'Personal',    
    component: Personal
  },
  {
    path:'/order/:id',
    component: Order
  },
  //注册页面
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  //登录界面
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
