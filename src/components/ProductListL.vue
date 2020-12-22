<template>
  <div class="div_h2">
    <div class="div_h3" v-for="(v, k) of indexlist" :key="k">
      <div class="padd">
        <router-link :to=" `/details/${v.did}`">
          <img
            class="img_h3"
            :src="require('../assets/Product_list/' + v.avatar)"
            alt=""
          />
          <div class="div_h4">{{ v.subject }}</div>
        </router-link>
      </div>
      <div class="div_h5">
        <div class="img_chui">
          <img class="img_h4" src="../assets/details/taobao.png" alt="" />
          <span class="jiage_h1">淘宝价：¥{{ v.taobao }}</span>
        </div>
        <div class="img_zhi">
          <img class="img_h5" src="../assets/details/jingdong.png" alt="" />
          <span class="jiage_h1">淘京东：¥{{ v.jd }}</span>
        </div>
      </div>
      <div class="piao">
        <div class="huiyuan">会员价</div>
        <div class="jiage_h3">¥{{ v.price }}</div>
      </div>
    </div>
  </div>
</template>
<style>
 .div_h2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
}
.div_h2 .img_h3 {
  width: 100%;
  
}
 .div_h2 .div_h3 {
  flex: 0 0 47%;
  background-color: #fff;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin: 10px auto;
}
 .div_h2 .padd {
  /* padding-left: 0.08rem;
  padding-bottom: -0.02rem; */
}
 .div_h2 #div.h5 {
  margin-top: -0.7rem;
}
 .div_h2 .div_h4 {
  display: block;
  height: 1.2rem;
  padding-left: 0.233rem;
  line-height: 0.6rem;
  letter-spacing: 0.0053rem;
  margin-bottom: 0.27rem;
  font-size: 0.4rem;
  color: #333333;
  overflow: hidden;
}

 .div_h2 .piao {
  display: flex;
  margin-left: 0.53rem;
}
 .div_h2 .img_chui {
  display: flex;
  align-items: center;
  margin-left: 0.53rem;
  margin-bottom: 0.26rem;
}
 .div_h2 .img_zhi {
  display: flex;
  align-items: center;
  margin-left: 0.53rem;
  margin-bottom: 0.27rem;
}
 .div_h2 .huiyuan {
  display: block;
  width: 1.87rem;
  height: 0.56rem;
  background: black;
  border-radius: 0.133rem;
  font-size: 0.133rem;
  text-align: center;
  color: #868178;
  line-height: 0.56rem;
}
 .div_h2 .jiage_h3 {
  color: red;
  font-size: 0.56rem;
  font-weight: bold;
  margin-left: 0.19rem;
}
 .div_h2 .jiage_h1 {
  text-decoration: line-through;
  color: #666;
  margin-left: 0.133rem;
  font-size: 0.43rem;
}
</style>
<script>
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
  }
};
</script>