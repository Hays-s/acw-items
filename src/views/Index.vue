<template>
  <div class="index">
    <table></table>
     <mt-header class="color_h1" fixed>
      <router-link to="/" slot="left">
        <mt-button>
          <img class="img_h1" src="../assets/details/logo.png" alt="" />
        </mt-button>
      </router-link>
        <router-link to="/" slot="right">
       
          <mt-button>
            <img class="img_h2" src="../assets/details/menu.png" alt=""/>
          </mt-button>
         </router-link>
    </mt-header>
    <div >
    <div class="index_top">
      <div class="index_top1">
        <div class="input_">
          <router-link to="/search">
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
          <mt-swipe :auto="4000">
          <mt-swipe-item class="pz2_swipe">
            <img src="../assets/index_imag/Swipe1.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item class="pz2_swipe">
            <img src="../assets/index_imag/Swipe2.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item class="pz2_swipe">
            <img src="../assets/index_imag/Swipe3.jpg" alt="">
          </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="index_top2">
        <ul>
          <li v-for="(k,i) of category" :key="i">
            <router-link to="/aichong">
              <img :src="k.image" alt=""><span>{{k.category_name}}</span></router-link>
          </li>
        </ul>
      </div>
      <div class="index_top3">
        <div class="title_">特卖专区</div>
        <div class="shop_show">
          <div class="shop_item" v-for="(k,i) of special" :key="i">
            <router-link :to="`/details/${k.did}`">
              <span class="shop_img">
              <img :src="k.avatar" alt="">
              </span> 
              <p class="shop_title">{{k.subject}}</p>
              <p class="shop_price">
                <span>特价：￥</span><span class="font_size17">{{k.price}}</span>
              </p>
            </router-link>
          </div>
        </div> 
      </div>
      <div class="g_title">
        <img src="../assets/index_imag/icon.png" alt="">
        <span>您可能喜欢的</span>
      </div>
      <product-listL></product-listL>
    </div>
    </div>
    <!-- <qa-bottom></qa-bottom> -->
  </div>
</template>
<style>
/* *{margin: 0;padding: 0;box-sizing: content-box} */
/* 内容1 */
/* .index .qaheaderNav{
  background-color: #FFD358;
  border-bottom: 0;
  } */
.index_top{
  background: #F5F5F5;
  padding-bottom: 1.41rem;
 margin-top: 1.3rem;
}
.index .index_top1 {
  /* width: 100%; */

  height: 2.94rem;
  background: url(../assets/index_imag/shop_bg.png) 0 -2.4rem no-repeat;
  margin-bottom: 1.2rem;
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
    border-radius: 0.6rem;
    overflow: hidden;
  }
.shop_pz2 img{width: 100%;}
  /* 内容2 */
.index_top2{
    height: 4.64rem;
    margin-top: 2.3rem;
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
    margin-bottom: 0.53rem;
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
    margin-top: 0.53rem; 
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
.index .shop_item .shop_img{display: inline-block;height: 2.67rem;border-radius: 0.2rem;overflow: hidden;}
.index .shop_item span>img{width: 100%}
.index .shop_title{height: 0.64rem;overflow: hidden;margin-bottom: 0.19rem;}
.shop_price{color: #D0021B}
.font_size17{font-size: 0.45rem;}
.index .g_title{height: 1.33rem;text-align: center} 
.index .g_title img{width: 0.51rem;height: 0.51rem;vertical-align:middle;margin-right: 0.27rem }
.index .g_title span{font-size: 0.45rem;margin-top: 2px;line-height: 1.33rem;}
</style>
<script>
export default {
  data(){
    return {
      category:[],
      index_list:[],
      special:[]
    }
  },
  mounted(){
    this.axios.get('/category').then(res=>{
      // console.log(res.data)
      let category=res.data.results
      // console.log(category)
      category.forEach(item=>{
        item.image=require('../assets/index_imag/'+item.category_image);
      this.category.push(item)
      })
      // console.log(this.category)
    })
    this.axios.get('/indexlist').then(res=>{
      let index_list=res.data.results;
      index_list.forEach(list=>{
        list.avatar=require('../assets/Product_list/'+list.avatar);
        this.index_list.push(list)
      })
    //   let special=[];
    //   let special_1,special_2,special_3;
    //  [special_1,special_2,special_3]=index_list
    //  special.push(special_1,special_2,special_3)
      
      let special= index_list.splice(-3,3)
      this.special=special;
      // console.log(index_list)
      // console.log(special)
    })
  }
}
</script>





