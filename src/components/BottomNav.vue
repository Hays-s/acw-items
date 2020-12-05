<template>
  <div class="bottom">
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectTab" fixed>
      <mt-tab-item id="index">首页
        <img src="../assets/images/ft1-on.png" alt="" slot="icon" v-if="selectTab=='index'">
        <img src="../assets/images/ft1.png" alt="" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="hos">爱宠课堂
        <img src="../assets/images/ft2-on.png" alt="" slot="icon" v-if="selectTab=='hos'">
        <img src="../assets/images/ft2.png" alt="" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="member">加入会员
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
<script>
export default {
    data(){
    return{
      selectTab:'index'
    }
  },
  watch:{
    selectTab(value){
      if(value=="index"){
        this.$router.push('/');
      }else if(value=="hos"){
        this.$router.push('/hos')
      }else if(value=="member"){
        this.$router.push('member')
      }
    }
  }
}
</script>
<style>
.bottom{max-width: 563px;}
.bottom >div{
  border-top:1px solid #CACACA;
  } 
.bottom .mint-tab-item{
  padding: 5px 0;
  color: #4a4a4a
}
.bottom   .mint-tabbar > .mint-tab-item.is-selected{
  color: #4a4a4a
}
</style>


