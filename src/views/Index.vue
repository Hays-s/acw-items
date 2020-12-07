<template>
  <div class="index">
    <div class="index_top">
      <div class="index_top1">
        <div class="input_">
          <router-link to="/">
            <img src="../assets/index_imag/search.png" alt="">
            <span>狗是色盲吗？</span> 
          </router-link>
        </div>
        <div class="shop_pz1">
          <div>
            <img src="../assets/index_imag/gou.png" alt="">
            <span>正品保证</span>
          </div>
          <div>
            <img src="../assets/index_imag/gou.png" alt="">
            <span>全场自营</span>
          </div>
          <div>
            <img src="../assets/index_imag/gou.png" alt="">
            <span>天天低价</span>
          </div>
          <div>
            <img src="../assets/index_imag/gou.png" alt="">
            <span>全场包邮</span>
          </div>
        </div>
        <div class="shop_pz2">
          <router-link to="/">
            <img src="../assets/index_imag/vip.png" alt="">
          </router-link>
        </div>
      </div>
      <div class="index_top2">
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_1.png" alt=""><span>狗粮</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_2.png" alt=""><span>猫粮</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_3.png" alt=""><span>猫零食</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_4.png" alt=""><span>猫砂</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_5.png" alt=""><span>狗零食</span></router-link>
          </li>
        </ul>
      </div>
      <div class="index_top2">
        <ul>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_6.png" alt=""><span>营养保健</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_7.png" alt=""><span>洗护用品</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_8.png" alt=""><span>服饰打扮</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_9.png" alt=""><span>驱虫用品</span></router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="../assets/index_imag/icon_10.png" alt=""><span>日常用品</span></router-link>
          </li>
        </ul>
      </div>
      <div class="index_top3">
        <div class="title_">特卖专区</div>
        <div class="shop_show">
          <div class="shop_item" v-for="(k,i) of 3" :key="i">
            <a href="#">
              <span class="shop_img">
              <img src="../assets/index_imag/652a75e07552c3b160fb815a90e95ace.jpg" alt="">
              </span> 
              <p class="shop_title">【养猫必备】猫草种子水培猫草除毛球猫草种籽</p>
              <p class="shop_price">
                <span>特价：￥</span><span class="font_size17">4.9</span>
              </p>
            </a>
          </div>
        </div> 
      </div>
      <div class="g_title">
        <img src="../assets/index_imag/icon.png" alt="">
        <span>您可能喜欢的</span>
      </div>
    </div>
  </div>
</template>
<style>
/* *{margin: 0;padding: 0;box-sizing: content-box} */
/* 内容1 */
.index_top{
  background: #F5F5F5;
  padding-bottom: 1.41rem;
  margin-top: 1.31rem;
}
.index .index_top1 {
  /* width: 100%; */

  height: 3.94rem;
  background: url(../assets/index_imag/shop_bg.png) 0 -2.4rem no-repeat;
  margin-bottom: 1rem;
  /* background-size: 100% */
}
.input_ {
  width: 93%;
  /* height: 50px;  50/37.5*/
  height: 1.33rem;
  margin: 0 auto;
}
.input_ a {
  display: inline-block;
  width: 100%;
  height: 1rem;
  background: #fff;
  border-radius: .3rem;
  color: #9b9b9b;
  border: 1px solid #ecbf40;
  vertical-align: middle;
  /* text-align: center; */
}
.index_top1 span {
  display: inline-block;
  line-height: 1rem;
  font-size: 0.37rem;
  vertical-align: middle
}
.input_ img{
  display: inline-block;
  width: 0.53rem;height: 0.53rem;
  vertical-align: middle;
  margin: 0 0.35rem;
}
.shop_pz1{
  width: 93%;height: 0.67rem;
  margin: 0.05rem auto;
  /* background: #fff; */
  display: flex;

}
.shop_pz1>div{
  width: 25%; height: 100%;
  line-height: 0.67rem;
  /* background: #000 */
}
.shop_pz1>div>img{
  width: 0.47rem;height: 0.47rem;
  vertical-align: middle;
  /* display: inline-block; */
  }
.shop_pz1>div>span{
    display: inline-block;
    height: 0.67rem;
    line-height: 0.67rem;
    margin-left: 0.13rem;
    font-size: 0.33rem;
  }
.shop_pz2{
    width: 93%;height: 2.28rem;
    margin: 0 auto;
    margin-top: 0.27rem;
  }
.shop_pz2 img{width: 100%}
  /* 内容2 */
.index_top2{
    height: 2.32rem;
    margin-top: 0.4rem;
    padding: 0 0.4rem;
    margin-bottom: 0.14rem;
  }
.index_top2>ul{
    display: flex;list-style: none;
    display: inline-block;
    width: 100%;height: 100%;
    /* padding-bottom: 10px; */
  }
.index_top2>ul>li{
    display: inline-block;
    width: 20%;
    text-align: center;
  }
.index_top2>ul>li span{
    display: block;
    color: #333;font-size: 0.32rem;
    }
.index_top2>ul>li img{
    /* display: inline-block; */
    width: 1.49rem;height: 1.49rem;
    border-radius: 50%;
    margin-bottom: 0.13rem;
  }
  /* 内容三 */
.index_top3{
    width: 86%; 
    background-color:#fff; 
    margin: 0 auto;
    padding: 0.27rem;  
  }
.shop_show{
    display: flex;
    justify-content: space-between;
}
.index .title_{margin-bottom: 0.27rem;color: #D0021B;font-size: .34rem}
.index .shop_item{
    width: 31%;
    /* background-color: #ecbf40; */
    padding-bottom: 0.13rem;
  }
.index .shop_item>a{
  display: inline-block;
  width: 100%;height: 100%;
  color: #4a4a4a;
  font-size: 0.32rem;
}
.index .shop_item .shop_img{display: inline-block;height: 2.67rem;}
.index .shop_item span>img{width: 100%}
.index .shop_title{height: 0.64rem;overflow: hidden;margin-bottom: 0.19rem;}
.shop_price{color: #D0021B}
.font_size17{font-size: 0.45rem;}
.index .g_title{height: 1.33rem;text-align: center} 
.index .g_title img{width: 0.51rem;height: 0.51rem;vertical-align:middle;margin-right: 0.27rem }
.index .g_title span{font-size: 0.45rem;margin-top: 2px;line-height: 1.33rem;}
</style>




