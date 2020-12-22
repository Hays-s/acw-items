<template>
  <div class="aichong">
    <acw-header></acw-header>
    <mt-navbar class="div_z1">
      <mt-tab-item id="1" class="font_size">全部</mt-tab-item>
      <mt-tab-item id="2" class="font_size">日常用品</mt-tab-item>
      <mt-tab-item id="3" class="font_size">驱虫用品</mt-tab-item>
      <mt-tab-item id="4" class="font_size">服饰打扮</mt-tab-item>
      <mt-tab-item id="5" class="font_size">洗护用品</mt-tab-item>
      <mt-tab-item id="6" class="font_size">营养保健</mt-tab-item>
      <mt-tab-item id="7" class="font_size">狗零食</mt-tab-item>
      <mt-tab-item id="8" class="font_size">猫砂</mt-tab-item>
      <mt-tab-item id="9" class="font_size">猫零食</mt-tab-item>
      <mt-tab-item id="10" class="font_size">猫粮</mt-tab-item>
    </mt-navbar>
    <product-listL></product-listL>
  </div>
</template>
<style >
.aichong .mint-tab-item-label{font-size: 0.4rem;}
.aichong .div_h1{
  margin-bottom: 1.13rem;
}
.aichong .mint-navbar {
  flex-wrap: wrap;
  margin-top: -0.08rem;
}
.aichong .font_size{
  color:#333;
  font-size: 5rem;
  line-height: 0.5rem;
}
.aichong .mint-navbar a {
  flex: 0 0 20%;
  margin-bottom: -0.53rem;
}
.aichong .img_h3 {
  width: 100%;
  /* margin-left: 0.14rem; */
}
.aichong .div_z1 {
  margin-bottom: 0.45rem;
}
</style>
<script>
import acwHeader from '../components/acwHeader.vue'
export default {
  data() {
    return {
      indexlist:[],
    }
  },
  mounted(){
    this.axios.get("/indexlist",{params:{id:this.$route.params.id}}).then((res)=>{
      // this.indexlist=res.results;
      this.indexlist=res.data.results;
      // console.log(this.indexlist);
      // this.indexlist.forEach(item=>{
      //   item.avatar=require('../assets/assets/Product' +item.avatar)
      //   console.log(item.avatar)
      // })
        // this.indexlist.push(item);
        // console.log(this.indexlist)
    });
  },
  components:{
    acwHeader
  }
};
</script>