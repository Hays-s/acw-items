<template>
  <div class="serach">
    <!-- 爱宠问答顶部导航 -->
    <qa-header></qa-header>
    <!-- 问题输入框-->
    <div class="searchpage">
      <div class="so">
        <input
          id="search"
          type="text"
          placeholder="请输入您想搜索的"
          name="keyword"
        />
      </div>
      <ul class="list4">
        <!-- 单一文章信息始 -->
        <li v-for="(ask,index) of 2" :key="index">
          <!-- 提问标题始 -->
          <div class="title">
            <div class="ask-text">问</div>
            <a href="/ask/69" class="desc">猫咪能吃鸡蛋吗</a>
          </div>
          <!-- 提问标题止 -->
          <!-- 解答问题始 -->
          <div class="con">
            <div class="answer-text">答</div>
            <a href="/ask/69" class="desc1"
              >有的猫咪可以吃鸡蛋，有的猫咪吃了鸡蛋之后会有一些不良反应，所以猫咪能不能吃鸡蛋要根据实际情况来看。1、有家长反应说，不同的...</a
            >
          </div>
          <!-- 解答问题止 -->
          <div class="btm">
            <div class="left">
              <img
                src="../assets/images/QA/avatar/tx.jpg"
                alt=""
                class="face"
              />
              <span class="name">张福礼</span>
              上海市瑞派良良宠物医院
            </div>
            <span class="red">6.8w</span>
          </div>
        </li>
        <!-- 单一文章信息止 -->
      </ul>
      <!-- 底部一对一按钮 -->
      <div class="box5">
        <a href="https://m.ichong123.com/pipei.html" class="btn"
          >宠物有问题，点这里一对一咨询宠物医生</a
        >
      </div>
      <!-- 底部图标 -->
      <div class="btlogo">
        <img src="../assets/images/QA/images/logo.png" alt="爱宠网" />
        <p>- 专注提供优质的养宠生活服务与养宠医疗服务 -</p>
      </div>
    </div>
    <!-- 爱宠问答底部导航 -->
    <qa-bottom></qa-bottom>
  </div>
</template>
<style>
.serach .list4>li{
  padding:0.4rem 0rem;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height:3.5rem;
  border-bottom: 1px solid #f1f1f1;
}
.serach .list4 .btm{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.serach .list4 .btm .red{
  color:#D0021B;
  font-size:0.32rem;
}
.serach .list4 .btm .left{
  color:#333333;
  font-size:0.32rem;
  
}
.serach .list4 .btm .name{
  color:#333333;
  font-size:0.4rem;
  margin-right:10px;
}
.serach .list4 .btm .face{
  width:0.66rem;height: 0.66rem;
  background-size:cover;
  margin-right:5px;
  vertical-align: middle;
}
.serach .list4 .con {
  display: flex;
}
.serach .list4 .desc1 {
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
.serach .list4 .answer-text {
  background-color: #589bfe;
  border-radius: 3rem;
  width: 0.66rem;
  height: 0.66rem;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.66rem;
}
.serach .list4 {
  padding: 0 0.4rem;
}
.serach .list4 .title {
  display: flex;
}
.serach .list4 .desc {
  font-size: 0.53rem;
  color: #2b313d;
  font-weight: bold;
  margin: 0 0 0 10px;
}
.serach .list4 .ask-text {
  background-color: #5bd692;
  border-radius: 3rem;
  width: 0.66rem;
  height: 0.66rem;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.66rem;
}
.serach .box5{
    padding:0.4rem;
}
.serach .box5 .btn{
    background-color:#61B500;
    text-align: center;
    font-size:0.4rem;
    color:#fff;
    width:9.2rem;
    height:1.2rem;
    line-height:1.2rem;
    border-radius:0.1rem;
    display:block;
}
.serach .btlogo > img {
  margin: 0.26rem 2.99rem;
  width: 4rem;
  height: 1.04rem;
  background-size: cover;
}
.serach .btlogo > p {
  color: #9b9b9b;
  font-size: 0.32rem;
  text-align: center;
}
.serach .searchpage {
  padding-top: 1.3rem;
  margin-bottom: 1.46rem;
}
.serach .searchpage .so > input {
  width: 9rem;
  height: 0.85rem;
  margin:0.4rem;
  text-align: center;
  border-radius: 1rem;
  border: solid 1px #ccc;
  color: #ccc;
}
</style>
<script>
import QaBottom from "../components/QaBottom";
export default {
  components: { QaBottom },
};
</script>