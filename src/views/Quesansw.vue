<template>
  <div class="Quesansw">
    <!-- 爱宠问答顶部导航 -->
    <qa-header></qa-header>
    <div class="main">
      <!-- 问答搜索框起 -->
      <div class="search">
        <router-link to="/search"><div>狗是色盲吗？</div></router-link>
      </div>
      <!-- 问答搜索框止-->
      <!--图标板块起 -->
      <div class="two">
        <a class="item">
          <router-link to="/qamatch"><div class="title">极速问诊<span class="tagOrange">超快</span></div></router-link>
          <div class="txt">在线宠物医生 实时在线接诊</div>
        </a>
        <a class="item">
          <div class="title">会员商城<span class="tagPurple">超省钱</span></div>
          <div class="txt">全场商品独享5折起</div>
        </a>
      </div>
      <div class="banner-box">
        <div class="item">
          <img
            src="../assets/images/QA/images/img13.png"
            alt=""
            class="cover"
          />
          <a href="#" class="con">
            <div class="title">专业的医师实力</div>
            <div class="txt">18名专业执照宠物医生24小时在线为您服务</div>
            <div class="operate"><router-link to="/qamatch"><span class="btn">点击查看 ></span></router-link></div>
          </a>
        </div>
      </div>
      <div class="box2">
        <a href="#"
          ><img src="../assets/images/QA/images/img14.png" alt=""
        /></a>
      </div>
      <!--图标板块止 -->
      <!-- 热门医生问答起 -->
      <div class="box4">
        <div class="g-title">
          热门医生问答 <router-link to="/quesansw" class="arrow">全部</router-link>
        </div>
        <div class="part">
          <img
            src="../assets/images/QA/images/img15.png"
            alt=""
            class="cover"
          />
          <a href="#" class="con">
            <div class="top">
              <span class="tag">爱宠课堂</span
              ><span class="number">10W人已学习</span>
            </div>
            <div class="title">如何给猫用驱虫药</div>
            <div class="btm">
              <div class="left"></div>
              <router-link to="/qamatch"><span class="btn">点击查看 ></span></router-link>
            </div>
          </a>
        </div>
      </div>
      <ul class="list4">
        <!-- 单一文章信息始 -->
        <li v-for="(ask, index) of articles" :key="index">
          <!-- 提问标题始 -->
          <div class="title">
            <div class="ask-text">问</div>
            <router-link :to="`/answer/${ask.id}`" class="desc">{{ask.subject}}</router-link>
          </div>
          <!-- 提问标题止 -->
          <!-- 解答问题始 -->
          <div class="con">
            <div class="answer-text">答</div>
            <router-link :to="`/answer/${ask.id}`" class="desc1"
              >{{ask.description}}</router-link
            >
          </div>
          <!-- 解答问题止 -->
          <div class="btm">
            <div class="left">
              <img
                :src="ask.docavatar"
                alt=""
                class="face"
              />
              <span class="name">{{ask.docname}}</span>
              {{ask.docaddress}}
            </div>
            <span class="red">{{ask.vote_numbers}}W</span>
          </div>
        </li>
        <!-- 单一文章信息止 -->
      </ul>
      <!-- 热门医生问答止 -->
    </div>
    <!-- 爱宠问答底部导航 -->
    <qa-bottom></qa-bottom>
  </div>
</template>
<style>
.Quesansw .main .list4 > li {
  padding: 0.4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.5rem;
  border-bottom: 1px solid #f1f1f1;
}
.Quesansw .main .list4 .btm {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Quesansw .main .list4 .btm .red {
  color: #d0021b;
  font-size: 0.32rem;
}
.Quesansw .main .list4 .btm .left {
  color: #333333;
  font-size: 0.32rem;
}
.Quesansw .main .list4 .btm .name {
  color: #333333;
  font-size: 0.4rem;
  margin-right: 10px;
}
.Quesansw .main .list4 .btm .face {
  width: 0.66rem;
  height: 0.66rem;
  background-size: cover;
  margin-right: 5px;
  vertical-align: middle;
}
.Quesansw .main .list4 .con {
  display: flex;
}
.Quesansw .main .list4 .desc1 {
  font-size: 0.34rem;
  color: #666666;
  margin: 0 0 0 10px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  line-height: 0.7rem;
  width: 8rem;
  height: 1.38rem;
}
.Quesansw .main .list4 .answer-text {
  background-color: #589bfe;
  border-radius: 3rem;
  width: 0.66rem;
  height: 0.66rem;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.66rem;
}
.Quesansw .main .list4 {
  padding: 0 0.4rem;
}
.Quesansw .main .list4 .title {
  display: flex;
}
.Quesansw .main .list4 .desc {
  font-size: 0.53rem;
  color: #2b313d;
  font-weight: bold;
  margin: 0 0 0 10px;
}
.Quesansw .main .list4 .ask-text {
  background-color: #5bd692;
  border-radius: 3rem;
  width: 0.66rem;
  height: 0.66rem;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.66rem;
}
.Quesansw .main {
  padding-top: 1.3rem;
  margin-bottom: 1.46rem;
}
.Quesansw .main .search {
  padding: 0.4rem;
}
.Quesansw .main .search  div{
  background: url(../assets/images/QA/images/search.png) #fff 0.5rem center
    no-repeat;
  background-size: 0.5rem 0.5rem;
  padding-left: 1.33rem;
  font-size: 0.37rem;
  color: #9b9b9b;
  border: #f1f1f1 0.053rem solid;
  line-height: 1.06rem;
  height: 1.06rem;
  display: block;
  border-radius: 2.13rem;
}
.Quesansw .two .item {
  background: #fff url(../assets/images/QA/images/bg12-1.png) 2.5rem 0.5rem
    no-repeat;
  background-size: 2rem 1.8rem;
  width: 4rem;
  height: 1.9rem;
  border-radius: 0.2rem;
  border: 0.053rem solid #f1f1f1;
  padding: 0.3rem 0.1rem 0.1rem 0.2rem;
  box-shadow: 0 0.02rem 0.04rem 0 rgba(193, 193, 193, 0.5);
}
.Quesansw .two .item:nth-child(2) {
  background-image: url(../assets/images/QA/images/bg12-2.png);
  background-position: 2.5rem 1rem;
  background-size: 2rem 2rem;
}
.Quesansw .two {
  display: flex;
  padding: 0 15px;
  margin: 0 0 15px;
  justify-content: space-between;
}
.Quesansw .two .item .title {
  font-size: 0.61rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 15px;
}
.Quesansw .two .item .title .tagOrange {
  font-size: 0.32rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #fad961 0%, #f76b1c 100%);
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  line-height: 0.53rem;
  border-radius: 0.25rem;
  width: 1.2rem;
  height: 0.53rem;
  margin: 0 0 0 0.13rem;
}
.Quesansw .two .item .title .tagPurple {
  font-size: 0.32rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right bottom, #3023ae 0%, #c86dd7 100%);
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  line-height: 0.53rem;
  border-radius: 0.25rem;
  width: 1.2rem;
  height: 0.53rem;
  margin: 0 0 0 0.13rem;
}
.Quesansw .two .item .txt {
  font-size: 0.32rem;
}
.Quesansw .banner-box .cover {
  width: 100%;
  background-size: cover;
}
.Quesansw .banner-box .item {
  padding: 0 0.4rem;
  position: relative;
}
.Quesansw .banner-box .con {
  color: #fff;
  width: 8.69rem;
  height: 3.15rem;
  padding: 12px 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0.4rem;
}
.Quesansw .banner-box .con .title {
  font-size: 0.66rem;
  padding: 5px 0 0;
}
.Quesansw .banner-box .con .txt {
  font-size: 0.4rem;
}
.Quesansw .banner-box .con .operate {
  width: 80px;
  height: 20px;
  font-size: 0.32rem;
  border-radius: 0.2rem;
  border: 1px solid #fff;
  background-color: #fff;
  text-align: center;
  line-height: 20px;
}
.Quesansw .banner-box .con .btn {
  color: #333333;
}
.Quesansw .main .box2 {
  margin-top: 0.35rem;
}
.Quesansw .main .box2 img {
  width: 100%;
  background-size: cover;
}
.Quesansw .main .box4 {
  margin: 15px 0 0;
  padding: 0rem 0.4rem;
}
.Quesansw .main .box4 .g-title {
  color: #333333;
  font-size: 0.53rem;
  font-weight: bold;
  position: relative;
  margin: 0 0 10px;
}
.Quesansw .main .box4 .arrow {
  background: url(../assets/images/QA/images/arrow.png) right center no-repeat;
  background-size: 0.15rem 0.3rem;
  padding-right: 0.3rem;
  color: #9b9b9b;
  font-size: 0.32rem;
  font-weight: normal;
  position: absolute;
  right: 0rem;
  top: 0.1rem;
}
.Quesansw .main .box4 .cover {
  width: 100%;
  background-size: cover;
}
.Quesansw .main .box4 .part {
  position: relative;
}
.Quesansw .main .box4 .con {
  color: #fff;
  width: 8.69rem;
  height: 3.15rem;
  padding: 12px 10px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Quesansw .main .box4 .con .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Quesansw .main .box4 .con .tag {
  border-radius: 0.1rem;
  border: 1px solid #4a90e2;
  background-color: #4a90e2;
  color: #fff;
  padding: 0 5px;
  font-size: 0.32rem;
  display: block;
  height: 0.7rem;
  width: 1.28rem;
  line-height: 0.7rem;
}
.Quesansw .main .box4 .con .number {
  font-size: 0.4rem;
}
.Quesansw .main .box4 .con .title {
  font-size: 0.66rem;
  text-align: center;
}
.Quesansw .main .box4 .con .btm {
  border-radius: 0.1rem;
  border: 1px solid #fed45b;
  background: #fed45b;
  width: 2.13rem;
  height: 0.53rem;
  text-align: center;
  line-height: 0.53rem;
  font-size: 0.32rem;
  color: #333333;
  transform: translateX(300%);
}
</style>
<script>
import QaBottom from "../components/QaBottom";
export default {
  components: { QaBottom },
  data(){
    return {
      articles:[]
      }
  },
  mounted(){
    this.axios.get('/quesansw').then(res=>{
    let articles=res.data.results;
    articles.forEach(doctor=>{
    doctor.docavatar=require('../assets/images/QA/avatar/'+doctor.docavatar)
    this.articles.push(doctor)
    })
    console.log(this.articles)
    });
  }
};
</script>
