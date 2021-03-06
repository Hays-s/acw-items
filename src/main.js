import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.prototype.qs=qs;
Vue.config.productionTip = false
//导入MintUI模块
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css'
//通过Vue.use()方法将MintUI注册为插件 
Vue.use(MintUI);
// 底部组件
// import BottomNav from './components/BottomNav.vue'
// Vue.component("bottom-nav",BottomNav)
import QaBottom from './components/QaBottom.vue'
Vue.component("qa-bottom",QaBottom)
// qa页面顶部组件
import QaHeader from './components/QaHeader.vue'
Vue.component("qa-header",QaHeader)
//通用顶部组件
// import acwHeader from './components/acwHeader.vue'
// Vue.component("acw-header",acwHeader)
//商品列表组件
import ProductListL from './components/ProductListL.vue'
Vue.component('product-listL',ProductListL)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
