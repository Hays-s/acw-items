<template>
  <div class="oo">
    <mt-header title="我的订单" class="qwe">  
      <router-link to="/personal" slot="left">
          <mt-button icon="back"></mt-button>
      </router-link>          
    </mt-header>
    <mt-navbar v-model="active" class="aa">
            <mt-tab-item id="a">全部 </mt-tab-item>
            <mt-tab-item id="b">待付款 </mt-tab-item>
            <mt-tab-item id="c">待发货 </mt-tab-item>
            <mt-tab-item id="d">待收货 </mt-tab-item>
            <mt-tab-item id="e">已完成 </mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" v-for="(results,index) of results" :key="index" swipeable>
            <mt-tab-container-item id="item01" >
              <div class="asd">
              <div class="q">
                <div class="t">订单编号：{{results.id}}</div>
                <div class="a">交易关闭</div>
              </div>
              <div class="w">
                <img :src="results.avatar"  alt="" class="e">
                <div>
                  <p class="l">{{results.subject}}</p>
                  <p class="ll">数量：×{{results.number}}</p>
                </div>
                <div>
                  <p class="tt">￥{{results.price}}</p>
                </div>
              </div>
              <div class="r">实付款:￥
               {{results.price*results.number+5}}(含运费:￥5.00)</div>
              <div class="r red_1">删除订单</div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="item02">
              <div class="asd">
              <div class="q">
                <div class="t">订单编号：{{results.id}}</div>
                <div class="a">支付</div>
              </div>
              <div class="w">
                <img :src="results.avatar"  alt="" class="e">
                <div>
                  <p class="l">{{results.subject}}</p>
                  <p class="ll">数量：×{{results.number}}</p>
                </div>
                <div>
                  <p class="tt">￥{{results.price}}</p>
                </div>
              </div>
              <div class="r">实付款:￥
               {{results.price*results.number+5}}(含运费:￥5.00)</div>
              <div class="r red_1">支付订单</div>
              </div>
              </mt-tab-container-item>
            <mt-tab-container-item id="item03"></mt-tab-container-item>
            <mt-tab-container-item id="item04"></mt-tab-container-item>
            <mt-tab-container-item id="item05"></mt-tab-container-item>
    </mt-tab-container>
    <div class="pp">
      <p>
        宠芽 3.3.6
      </p>
    </div>
  </div>
</template>

<style scoped>
.oo{
  background-color:	#F5F5F5;
}
.qwe{
  /* background-color: #FFD358; */
  background-image: -webkit-linear-gradient(left
  , #ca685b 0%, #dd2f18 100%);
  color: black;
}
.asd{
  width: 9rem;
  margin-left: 0.45rem;
  background-color: #fff;
}
.q {
  height: 0.7rem;;
  font-size: 0.4rem;
  border-bottom: 0.001rem #ccc solid;
}
.a {
  margin-top: 0.5rem;
  padding-top: 0.16rem;
  margin-right: 0.3rem;
  text-align: right;
  color: #dd2f18;
}
.t {
  margin-top: 0.16rem;
  margin-left: 0.3rem;
  float: left;
}
.w {
  display: flex;
  font-size: 0.45rem;
}
.l{
  margin-top: 0.5rem;
  font-size: 0.40rem;
}
.ll{
  margin-top: 0.5rem;
  font-size: 0.2rem;
}

.e {
  margin-top: 0.6rem;
  margin-right: 0.3rem;
  margin-left: 0.2rem;
  width: 25%;
  height: 2.13rem;
}
.r {
  text-align: right;
  font-size: 0.4rem;
  padding-right: 0.3rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.red_1{
  color: #dd2f18;
}
.tt {
  margin-top: 0.8rem;
  margin-right: 0.2rem;
  margin-left: 0.3rem;
}
.pp {
  text-align: center;
  /* margin-bottom:1.6rem; */
  height: 14rem;
  font-size: 0.026rem;
  position: relative;
}
.pp p {
  position: absolute;
  bottom: 0rem;
  padding-left: 4rem;
}
</style>

<script>
export default {
  data() {
    return {
      active: "a",
      selected: "item01",
      selectedTab: "index",
      results: []
    };
  },
  watch: {
    selectedTab(value) {
      if (value == "index") {
        this.$router.push("/");
      } else if (value == "me") {
        this.$router.push("/button");
      }
    },
    active(value) {
      if (value == "a") {
        this.selected = "item01";
      } else if (value == "b") {
        this.selected = "item02";
      } else if (value == "c") {
        this.selected = "item03";
      } else if (value == "d") {
        this.selected = "item04";
      } else if (value == "e") {
        this.selected = "item05";
      }
    }
  },
  mounted() {
    this.axios
      .get("/oredr", {
        params: {
          id: this.$route.params.id
        }
      })
      .then(res => {
        // console.log(this.$route.params.id);
        // 获取服务器返回的结果
        this.results = res.data.results;
      });
  }
};
</script>
