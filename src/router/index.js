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
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
// import Article from '../views/Article.vue'
/////////////////项目实践结束/////////////////////
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
