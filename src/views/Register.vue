<template>
  <div class="login">
    <!-- 顶部导航 -->
    <mt-header>
      <!-- 返回按钮的页面路径未定 -->
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="body">
      <!-- 标题 -->
      <h2 class="title">注册</h2>
      <!-- 表单区域 -->
      <div class="form">
        <!-- 昵称 -->
        <mt-field
          type="text"
          label="昵称"
          placeholder="请输入昵称"
          v-model="uname"
        ></mt-field>
        <!-- 手机号 -->
        <mt-field
          type="text"
          label="手机号"
          placeholder="请输入手机号"
          v-model="phone"
          @blur.native.capture="phonemsg(0)"
          :state="phoneState"
        ></mt-field>
        <!-- 密码 -->
        <mt-field
          type="password"
          label="密码"
          placeholder="请输入密码"
          v-model="password"
          @blur.native.capture="passwordmsg(0)"
          :state="passwordState"
        ></mt-field>
        <!-- 验证码 -->
        <mt-field type="text" label="验证码" placeholder="请输入验证码"
          ><mt-button size="small" plain>获取验证码</mt-button></mt-field
        >
        <!--注册按钮-->
        <mt-button size="large" @click="handle">注册</mt-button>
      </div>
    </div>
  </div>
</template>
<style>
.body {
  padding: 0 10px;
}
.login > .body > .title {
  margin: 35px 0px;
  font-size: 32px;
  font-weight: bold;
}
.login > .body > .form > button {
  background-color: #d95a48;
  color: white;
}
.login > .mint-header {
  background: white;
}
.login > .mint-header > .mint-header-button {
  color: black;
}
.login .mint-field .mint-cell-title {
  width: 80px;
}
</style>


<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      uname: "",
      phone: "",
      phoneState: "",
      password: "",
      passwordState: "",
    };
  },
  methods: {
    unamemsg(utk) {
      let phoneRegExp = /^1[3-9][0-9]{9}$/;
      if (phoneRegExp.test(this.phone)) {
        this.phoneState = "success";
        return true;
      } else {
        if (htk)
          this.$toast({
            message: "手机号错误",
            position: "bottom",
            duration: 1000,
          });
        this.phoneState = "error";
        return false;
      }
    },
    phonemsg(htk) {
      let phoneRegExp = /^1[3-9][0-9]{9}$/;
      if (phoneRegExp.test(this.phone)) {
        this.phoneState = "success";
        return true;
      } else {
        if (htk)
          this.$toast({
            message: "手机号错误",
            position: "bottom",
            duration: 1000,
          });
        this.phoneState = "error";
        return false;
      }
    },
    passwordmsg(atk) {
      let passwordRegExp = /^[0-9A-Za-z]{8,14}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        if (atk)
          this.$toast({
            message: "密码错误：区分大小写，要求至少8个字符且小于14个字符",
            position: "bottom",
            duration: 1000,
          });
        this.passwordState = "error";
        return false;
      }
    },
    //请求
    handle() {
      if (this.phonemsg(1) && this.passwordmsg(1)) {
        let obj = {
          uname:this.uname,
          phone: this.phone,
          password: this.password,
        };
        let str = this.qs.stringify(obj);
        this.axios.post("/register", str).then((res) => {
          MessageBox.alert("注册成功!").then((action) => {
            this.$router.push("/login");
          });
        });
      }
    },
  },
  watch: {
    phone() {
      this.phonemsg(0);
    },
    password() {
      this.passwordmsg(0);
    },
  },
};
</script>
