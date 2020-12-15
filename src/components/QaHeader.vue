<template>
  <div class="qaheader">
    <!-- 爱宠问答顶部导航 -->
    <div class="qaheaderNav">
      <div><img src="../assets/images/QA/images/logo2.png" alt="" /></div>
      <div></div>
    </div>
  </div>
</template>
<style>
.qaheaderNav {
  padding: 0rem 0.4rem;
  height: 1.3rem;
  width:9.2rem;
  position:fixed;
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-bottom:0.053rem solid#F1F1F1;
  background-color:#fff;
  z-index: 10;
} 
.qaheaderNav div:first-child {
 width:5.4rem;
}
.qaheaderNav div:first-child > img {
  width:100%;
  height: 100%;
}
.qaheaderNav div:last-child {
  width: 0.66rem;
  height: 0.66rem;
  display: block;
  line-height: 0.66rem;
  background: url(../assets/images/QA/images/menu.png) center center no-repeat;
  background-size: 0.66rem,0.66rem;
}
</style>