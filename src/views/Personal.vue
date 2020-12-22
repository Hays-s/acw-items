<template>
  <div class="app">
    <!-- <acw-header></acw-header> -->
    <div class="gg">
      <div class="q">
        <img src="../assets/geren/发送.png" alt="">
        <img src="../assets/geren/设置.png" alt="">
      </div>
      <div class="w" v-if="isLogined == 0">
        <div></div>
        <router-link to="/login">
          <img src="../assets/geren/宠物.png" alt="">
          <span>登录/注册  ></span>
        </router-link>
      </div>
      <div class="w" v-else>
        <div></div>
        <img src="../assets/geren/宠物.png" alt="">
        <span>{{info.uname}}</span>
      </div>
      
      <div v-show="isShow" class="top" v-if="isLogined == 0">
            <img src="../assets/geren/宠物.png" alt="" class="x">
            <p> </p>
            <img src="../assets/geren/发送.png" alt="" class="c">
            <img src="../assets/geren/设置.png" alt="" class="v">
      </div>
      <div v-show="isShow" class="top" v-else>
            <img src="../assets/geren/宠物.png" alt="" class="x">
            <span>{{info.uname}}</span>
            <img src="../assets/geren/发送.png" alt="" class="c">
            <img src="../assets/geren/设置.png" alt="" class="v">
      </div>

      <router-link to="/order/id" class="zxc">
      <ul class="r">
        <li>
          <img src="../assets/geren/优惠券.png" alt="" class="a">
          <span>优惠券</span>
        </li>
        <li>
          <img src="../assets/geren/收藏夹.png" alt="" class="s">
          <span>收藏夹</span>
        </li>
        <li>
          <img src="../assets/geren/钱包.png" alt="" class="d">
          <span>钱包</span>
        </li>
      </ul>
      </router-link>
      </div>
    <div class="o"> 
      <div class="t">
        <div class="u">门店订单</div>
        <div class="i"> > </div>
      </div> 
      <router-link :to="`/order/${info.id}`"  class="zxc">         
      <ul>
        <li>
        <img src="../assets/geren/待付款.png" alt="">
        <span>待付款</span>
        </li>
        <li>
        <img src="../assets/geren/待使用.png" alt="">
        <span>待使用</span>
        </li>
        <li>
        <img src="../assets/geren/已完成.png" alt="">
        <span>已完成</span>
        </li>
        <li>
        <img src="../assets/geren/售后.png" alt="">
        <span>退款/售后</span>
        </li>
        <li>
        <img src="../assets/geren/其他.png" alt="">
        <span>分享</span>
        </li>
      </ul>
       </router-link>
    </div>
    <div class="o">
      <div class="t">
        <div class="u">电商订单</div>
         <div class="i">></div>
      </div>
       <router-link :to="`/order/id`" class="zxc">    
      <ul >
        <li>
        <img src="../assets/geren/待付款.png" alt="">
        <span>待付款</span>
        </li>
        <li>
        <img src="../assets/geren/待发货.png" alt="">
        <span>待发货</span>
        </li>
        <li>
        <img src="../assets/geren/待收货.png" alt="">
        <span>待收货</span>
        </li>
        <li>
        <img src="../assets/geren/已完成.png" alt="">
        <span>已完成</span>
        </li>
        <li>
        <img src="../assets/geren/售后.png" alt="">
        <span>退款/售后</span>
        </li>
      </ul>
       </router-link>
    </div>
    <img src="../assets/geren/优惠券.jpg" alt="" class="y" >
    <div class="o">
      <div class="t">
        <div class="u">我的服务</div>
        <div class="i">></div>
      </div>
       <router-link to="/order/id" class="zxc"> 
      <ul >
        <li>
          <img src="../assets/geren/宠物.png" alt="">
          <span>我的宠物</span>
        </li>
        <li>
          <img src="../assets/geren/卡包.png" alt="">
          <span>卡包</span>
        </li>
        <li>
          <img src="../assets/geren/邀请.png" alt="">
          <span>邀请有礼</span>
        </li>
        <li>
          <img src="../assets/geren/意见反馈.png" alt="">
          <span>意见反馈</span>
        </li>
        <li>
          <img src="../assets/geren/客服.png" alt="">
          <span>联系客服</span>
        </li> 
      </ul>
      </router-link>
    </div>
    <div class="p">
      <p>
        宠芽 3.3.6
      </p>
    </div>
    <!-- <mt-tabbar v-model="sel" fixed>
        <mt-tab-item id="index">首页
        <img src="../assets/geren/首页.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="index">分类
        <img src="../assets/geren/分类.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="index">门店
        <img src="../assets/geren/门店.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="index">购物车
        <img src="../assets/geren/购物车.png" alt="" slot="icon">
        </mt-tab-item>
        <mt-tab-item id="me">
        我的
        <img src="../assets/geren/我的1.png" alt="" slot="icon" v-if="sel == 'me'">
        <img src="../assets/geren/我的.png" alt="" slot="icon" v-else>
        </mt-tab-item>
    </mt-tabbar> -->
    <div class="gotop-box">
      <i @click="gotop" class="icon topIcon"></i>
    </div>
  </div>
</template>

<style scoped>
.app .top span{
  padding-top: 0.45rem;
  margin-left: 0.2rem;
  font-size: 0.35rem
  }
.app {
  background-color: #f0f0f0;
}
.app .topIcon{width: 0.61rem;height: 0.61rem}
span{
  display: block;
  color: #333;
  font-size: 0.32rem;
  margin-top: 0.026rem;
  }
  .w span{
    display: inline-block;
    font-size: 0.5rem;
    /* line-height: 65px; */
    margin-left: 0.4rem;
    padding-top: 0.25rem;
    }
     .w a{
       display: inline-block;
       display: flex;
       align-items: center;
     }
.gg{
  /* background-color: #FFD358; */
  background-image: -webkit-linear-gradient(top, #ca685b 0%, #dd2f18 100%);
  border-bottom-right-radius:3rem;
  border-bottom-left-radius: 3rem; 
  margin-bottom: 0.5rem;
}
.zxc{
  text-decoration: none;
}
.y {
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.4rem;
  border-radius:0.5rem; 
}
.q {
  float: right;
}
.q img{
  
  margin-right: 0.4rem;
}
.w {
  clear: both;
  display: flex;
}
.w img {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  margin-bottom: 0.2rem;
  padding: 0.13rem;
  border-radius: 50%;
  background-color: #DEE1E6;
}
.w p {
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  font-size: 0.4rem;
}
ul {
  display: flex;
  padding: 0;
  list-style: none;
  background-color: white;
}
.r {
  width: 9rem;
  height: 2.13rem;
  margin-left: 0.5rem;
  background-color: white;
}
.r li {
  width: 33.3%;
  margin-top: 0.4rem;
  text-align: center;
  background-color: white;
}
.r img {
  padding: 0.106rem;
}
.r p {
  margin: 0;
  margin-top: 0.02rem;
  text-align: center;
}
.a {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40%;
  background-color: #EC5B49;
  margin: 0 auto;
}
.s {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40%;
  /* background-color: rgb(0, 174, 255); */
  background-color: #75ACF8;
  margin: 0 auto;
}
.d {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 40%;
  background-color: #FFD358;
  margin: 0 auto;
}
.o {
  width: 9.3rem;
  height: 3rem;
  margin-left: 0.3rem;
  margin-bottom: 0.4rem;
  border-radius: 3%;
  font-size: 0.26rem;
  background-color: white;
  text-align: center;
}
.o li {
  width: 25%;
  margin-top: 0.3rem;
  background-color: white;
}
.o li img{
  width: 0.58rem;height: 0.58rem;
  margin-bottom: 0.21rem;
  }
.t {
  width: 8rem;
  height: 0.9rem;
  margin-left: 0.6rem;
  background-color: white;
  border-bottom: 0.026rem solid #ccc;
}
.u {
  float: left; 
  margin-top: 0.3rem;
  font-size: 0.37rem;
  background-color: white;
}
.i {
  float: right;
  margin-top: 0.3rem;
  font-size: 0.37rem;  
  background-color: white;
}
li p {
  margin: 0 auto;
  margin-top: 0.1rem;  
  background-color: white;
  font-size: 0.026rem;
}
li img {
  background-color: white;
}
.p {
  text-align: center;
  margin-bottom:1.47rem;
  height: 13.3rem;
  font-size: 0.026rem;
  position: relative;
}
.p p {
  position: absolute;
  bottom: 0rem;
  padding-left: 4rem;
}
.topIcon {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: url(../assets/geren/gotop.png) center center no-repeat;
  background-size: cover;
}
.x img{
  width: 1.06rem; height: 1.06rem;
  margin: 0.13rem;
  background-color: #DEE1E6;
  border-radius: 50%;
}
.top{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 666;
  display: flex;  
  /* background-color: #FFD358; */
  background-image: -webkit-linear-gradient(left, #ca685b 0%, #dd2f18 100%);
}
.top p{
  margin-top: 0.5rem;
  background-color: #FFD358; 
  font-size: 0.373rem; 
}
.x{
  width:1.06rem;
  margin: 0.13rem;
  border-radius: 50%;
  background-color: #DEE1E6;
}
.c {
  width: 0.42rem;height: 0.42rem;
  background-color: #dd2f18;
  margin-top: 0.41rem;
  margin-left: 5.5rem;
  margin-right: 0.4rem;
}
.v{
   width: 0.42rem;height: 0.42rem;
   background-color: #dd2f18;
   margin-top: 0.4rem;
}
</style>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
  ...mapState(['isLogined','info']),
  ...mapState({})
},
  data() {
    return {
      sel: "me",
      isShow: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.isScroll);
  },
  methods: {
    gotop: function() {
      // 点击回顶按钮 返回顶部
      setTimeout(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
    },
    isScroll() {
      let top = document.documentElement.scrollTop;
      if (top > 10) {
        // 滚动条滚动距离超过30时
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>
