<template>
  <div class="qamatch">
    <!-- 爱宠问答顶部导航 -->
    <qa-header></qa-header>
    <!-- 问题按钮 -->
    <div class="main">
      <div class="first">
        <div class="first_tit">
          为了提升服务质量，请选择您要咨询的宠物类型。
        </div>
        <div class="first_list">狗狗类问题</div>
        <div class="first_list">猫猫类问题</div>
        <div class="first_list">其他问题</div>
      </div>
    </div>
  </div>
</template>
<style>
.qamatch .first {
  margin: 0.4rem;
}
.qamatch .first_tit {
  color: #333333;
  font-size: 0.35rem;
  text-align: center;
  height: 1.33rem;
  line-height: 1.33rem;
}
.qamatch .first_list {
  margin: 0.4rem 0.9rem;
  color: #333333;
  font-size: 0.53rem;
  height: 1.33rem;
  border: solid 1px #cccccc;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 1.33rem;
}
.qamatch .main {
  padding-top: 1.3rem;
}
</style>
<script>
export default {};
</script>