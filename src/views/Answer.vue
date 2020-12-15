<template>
  <div class="answer">
    <!-- 爱宠问答顶部导航 -->
    <qa-header></qa-header>
    <!-- 问答详情始 -->
    <div class="container">
      <h1 class="title1">{{answer.subject}}</h1>
      <div class="lm">
        <div class="lm_xx">
          <a class="opents" href="javascript://">
            <img :src="answer.docavatar" />
            <div class="lm_info">
              <b>{{answer.docname}}</b>
              <p>{{answer.docaddress}}</p>
            </div>
          </a>
        </div>
        <a class="lm_btn" href="https://m.ichong123.com/pipei.html">免费咨询</a>
      </div>
      <!-- 回答信息内容，用v-html调取数据渲染 -->
      <div class="content">
        <div class="actext" v-html="answer.content">
        </div>
      </div>
    </div>
    <!-- 问答详情止-->
    <!-- 商品推荐起 -->
    <div class="ask_shop">
      <div class="title">清仓特卖 <small>全场批发价，买到就是赚</small></div>
      <div class="list2">
        <div class="item">
          <div class="img">
            <a href="https://m.ichong123.com/goods/s140.html"
              ><img
                src="../assets/images/QA/images/652a75e07552c3b160fb815a90e95ace.jpg"
                alt="【养猫必备】猫草种子水培猫草除毛球猫草种籽"
            /></a>
          </div>
          <div class="btm">
            <h3>
              <a class="la" href="https://m.ichong123.com/goods/s140.html"
                >【养猫必备】猫草种子水培猫草除毛球猫草种籽</a
              >
            </h3>
            <div class="pricered">特价：￥<span class="big">4.9</span></div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <a href="https://m.ichong123.com/goods/s85.html"
              ><img
                src="../assets/images/QA/images/0f1976dcc2c16d3408344308bbe3767e.jpg"
                alt="耐威克全犬种通用型成犬狗粮 鸡肉味"
            /></a>
          </div>
          <div class="btm">
            <h3>
              <a class="la" href="https://m.ichong123.com/goods/s85.html"
                >耐威克全犬种通用型成犬狗粮 鸡肉味</a
              >
            </h3>
            <div class="pricered">特价：￥<span class="big">5</span></div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <a href="https://m.ichong123.com/goods/s149.html"
              ><img
                src="../assets/images/QA/images/012fe48f0faa7fd78c98b8fb3198d07d.jpg"
                alt="猫薄荷45ml 猫咪零食排毛球增加食欲"
            /></a>
          </div>
          <div class="btm">
            <h3>
              <a class="la" href="https://m.ichong123.com/goods/s149.html"
                >猫薄荷45ml 猫咪零食排毛球增加食欲</a
              >
            </h3>
            <div class="pricered">特价：￥<span class="big">4.9</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品推荐止 -->
    <!-- 底部图标 -->
    <div class="btlogo">
      <img
        src="../assets/images/QA/images/logo.png"
        alt="爱宠网"
      />
      <p>- 专注提供优质的养宠生活服务与养宠医疗服务 -</p>
    </div>
    <!-- 爱宠问答底部导航 -->
    <qa-bottom></qa-bottom>
  </div>
</template>
<style>
.answer .btlogo>img{
  margin: 0.26rem 2.99rem;
  width:4rem;height:1.04rem;
  background-size:cover;
}
.answer .btlogo>p{
  color:#9B9B9B;
  font-size:0.32rem;
  text-align: center;
}
.answer .ask_shop .big {
  font-size: 0.45rem;
}
.answer .ask_shop .pricered {
  color: #e23723;
  font-size: 0.32rem;
}
.answer .btlogo {
  margin-bottom: 65px;
}
.answer .ask_shop {
  padding: 15px;
  color: #333333;
  font-size: 0.32rem;
  background-color: #fff;
}
.answer .ask_shop .list2 .item .btm .la {
  color: #4a4a4a;
  line-height: 0.4rem;
}
.answer .ask_shop .list2 .item .btm h3 {
  width: 2.6rem;
}
.answer .ask_shop .list2 {
  display: flex;
  justify-content: space-between;
}
.answer .ask_shop .list2 .item .img img {
  width: 2.6rem;
  background-size: cover;
}
.answer .ask_shop .title {
  margin-bottom: 10px;
  color: #e23723;
  font-size: 0.45rem;
}
.answer .ask_shop .title > small {
  color: #000000;
  font-size: 0.32rem;
  margin-left: 5px;
}
.answer .container .content .actext .acimg > img {
  width: 100%;
  background-size: cover;
}
.answer .container .content .actext {
  margin: 0 0.4rem;
}
.answer .container .content .actext p {
  color: #333;
  font-size: 0.42rem;
  margin-top: 18px;
  line-height: 0.7rem;
}
.answer .container .content .actext p > strong {
  font-weight: bold;
}
.answer .container .lm_btn {
  background-color: #61b500;
  width: 2rem;
  height: 0.69rem;
  color: #fff;
  font-size: 0.32rem;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.69rem;
  display: block;
  margin-top: 0.13rem;
}
.answer .container .opents .lm_info {
  width: 5rem;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.answer .container .opents .lm_info > b {
  display: block;
  color: #000;
  font-weight: bold;
  font-size: 0.4rem;
}
.answer .container .opents .lm_info > p {
  color: #666666;
  font-size: 0.32rem;
}
.answer .container .opents {
  display: flex;
}
.answer .container .opents > img {
  width: 0.98rem;
  height: 0.98rem;
  background-size: cover;
  margin-right: 10px;
}
.answer .container .lm {
  display: flex;
  justify-content: space-between;
  margin: 0.4rem 0.4rem 0;
}
.answer .container {
  padding-top: 1.35rem;
}
.answer .container .title1 {
  margin: 15px;
  font-size: 0.66rem;
  font-weight: bold;
  color: #000;
}
.answer .container .lm_info {
  width: 0.66rem;
  height: 0.66rem;
  background-size: cover;
  margin-right: 5px;
  vertical-align: middle;
}
</style>
<script>
import QaBottom from "../components/QaBottom";
export default {
  components: { QaBottom },
  data(){return{
    // 储存回答信息
    answer:{},
  }},
  mounted(){
    let id=this.$route.params.id;
    this.axios.get('/answers',{params:{id:id}}).then(res=>{
      this.answer=res.data.result;
      this.answer.docavatar=require("../assets/images/QA/avatar/"+res.data.result.docavatar)
      console.log(this.answer)
   })
  }
};
</script>