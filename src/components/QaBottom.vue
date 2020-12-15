<template>
    <div class="qabottom">
          <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectTab" fixed>
      <mt-tab-item id="index">首页
        <img src="../assets/images/ft1-on.png" alt="" slot="icon" v-if="selectTab=='index'">
        <img src="../assets/images/ft1.png" alt="" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="hos">爱宠问答
        <img src="../assets/images/ft2-on.png" alt="" slot="icon" v-if="selectTab=='hos'">
        <img src="../assets/images/ft2.png" alt="" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="vip">会员商城
        <img src="../assets/images/ft3-on.png" alt="" slot="icon" v-if="selectTab=='vip'">
        <img src="../assets/images/ft3.png" alt="" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="new">加入会员
        <img src="../assets/images/ft4.png" alt="" slot="icon" v-if="selectTab=='new'">
        <img src="../assets/images/ft4.png" alt="" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="shop">个人中心
        <img src="../assets/images/ft5.png" alt="" slot="icon" v-if="selectTab=='shop'">
        <img src="../assets/images/ft5.png" alt="" slot="icon" v-else>
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
    </div>
</template>
<style>

</style>
<script>
export default {
    name:"QaBottom",
    data(){
    return{
    selectTab:'hos'
    }
  },
}

</script>

