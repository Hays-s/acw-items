<template>
  <div class="register">
    <!-- 顶部导航 -->
    <mt-header>
      <!-- 返回按钮的页面路径未定 -->
      <router-link to="/login" slot="left">
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
        <mt-field
          type="text"
          label="验证码"
          placeholder="请输入验证码"
          v-model="codevalue"
          ><mt-button size="small" plain :disabled="dis" @click="codemsg">{{
            codebutton
          }}</mt-button></mt-field
        >
        <!--注册按钮-->
        <mt-button size="large" @click="handle">注册</mt-button>
        <div class="code" :style="{ opacity: show }">验证码:{{ code }}</div>
      </div>
    </div>
  </div>
</template>
<style>
.body {
  padding: 0 10px;
}
.register > .body > .title {
  margin: 35px 0px;
  font-size: 32px;
  font-weight: bold;
}
.register > .body > .form > button {
  background-color: #d95a48;
  color: white;
  margin-top: 10px;
}
.register > .mint-header {
  background: white;
}
.register > .mint-header > .mint-header-button {
  color: black;
}
.register .mint-field .mint-cell-title {
  width: 80px;
}
.register .mint-cell-wrapper {
  background-size: 0;
  border-bottom: 1px solid #d9d9d9;
}
.register .code {
  margin: 40px auto;
  width: 30%;
  border: 1px solid #d95a48;
  font-size: 17px;
  text-align: center;
  opacity: 0;
  transition: 3s;
}
</style>


<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      //昵称
      uname: "",
      //手机号
      phone: "",
      //手机号是否正确图标
      phoneState: "",
      //密码
      password: "",
      //密码是否正确图标
      passwordState: "",
      //用户输入的验证码值
      codevalue: "",
      //发送的验证码值
      code: "99999",
      // 控制弹出的验证码框透明度
      show: 0,
      //验证码按钮内的字符
      codebutton: "发送验证码",
      //验证码按钮是否禁用
      dis: false,
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
    // 验证手机号
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
    // 验证密码
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
    //验证码
    codemsg() {
      var second = 15;
      this.dis = true;
      this.codebutton = `${second}s后重发`;
      var timer = setInterval(() => {
        second--;
        if (second > 0) {
          this.codebutton = `${second}s后重发`;
        } else {
          clearInterval(timer);
          this.dis = false;
          this.codebutton = "重新发送验证码";
        }
      }, 1000);
      //清除原验证码
      this.code = "";
      //声明循环次数
      var codelength = 4;
      //生成随机4位数字验证码
      for (var i = 0; i < codelength; i++) {
        this.code += Math.floor(Math.random() * 10);
      }
      //显示验证码
      this.show = 1;
      //
    },

    //发起注册请求
    handle() {
      //检测验证码是否一致
      if (this.codevalue == this.code) {
        //当手机号和密码吗验证通过时
        if (this.phonemsg(1) && this.passwordmsg(1)) {
          let obj = {
            uname: this.uname,
            phone: this.phone,
            password: this.password,
          };
          let str = this.qs.stringify(obj);
          this.axios.post("/register", str).then((res) => {
            if (res.data.code == 201) {
              MessageBox("提示", "手机号已存在");
            } else if (res.data.code == 200) {
              MessageBox.alert("注册成功!").then((action) => {
                this.$router.push("/login");
              });
            }
          });
        }
        // 验证码错误时
      } else {
        MessageBox("提示", "验证码错误");
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
