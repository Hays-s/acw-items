<template>
  <div class="login">
    <!-- 顶部导航 -->
    <mt-header>
      <!-- 返回按钮的页面路径未定 -->
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/register" slot="right">注册</router-link>
    </mt-header>
    <div class="body">
      <!-- 标题 -->
      <h2 class="title">密码登录</h2>
      <!-- 表单区域 -->
      <div class="form">
        <!-- 手机号 -->
        <mt-field
          type="text"
          label="手机号"
          placeholder="请输入手机号"
          v-model="phone"
          @blur.native.capture="phonemsg(0)"
        ></mt-field>
        <!-- 密码 -->
        <mt-field
          type="password"
          label="密码"
          placeholder="请输入密码"
          v-model="password"
          v-if="textshow"
          @blur.native.capture="passwordmsg(0)"
        ></mt-field>
        <!-- 验证码 -->
        <mt-field
          type="text"
          label="验证码"
          placeholder="请输入验证码"
          v-model="codevalue"
          v-else
          ><mt-button size="small" plain :disabled="dis" @click="codemsg">{{
            codebutton
          }}</mt-button></mt-field
        >
        <p @click="showcodetext" v-if="pshow">使用验证码登录</p>
        <p @click="showcodetext2" v-else>使用密码登录</p>
        <!--登录按钮-->
        <mt-button size="large" @click="handle">登录</mt-button>
        <!-- 其他方式 -->
        <div id="d1">
          <div></div>
          <p>其他方式登录</p>
        </div>
        <div class="img">
          <div>
            <img src="../assets/images/QQ.png" alt="" />
          </div>
          <div>
            <img src="../assets/images/微信.png" alt="" />
          </div>
          <div>
            <img src="../assets/images/苹果.png" alt="" />
          </div>
        </div>
        <div class="code" :style="{ opacity: show }">验证码:{{ code }}</div>
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
  border-radius: 30px;
  width: 90%;
  margin: 0 auto;
  background-image: -webkit-linear-gradient(left, #ca685b 0%, #dd2f18 100%);
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
#d1 > div {
  margin-top: 30px;
  width: 100%;
  height: 5px;
  border-bottom: 1px solid #d9d9d9;
}
#d1 > p {
  position: relative;
  width: 100px;
  background-color: white;
  color: #d9d9d9;
  top: -8px;
  left: 127px;
  font-size: 14px;
  text-align: center;
}
.login .body .form > p {
  margin: 20px 0px 30px 0px;
  padding: 0 10px;
  color: #d95a48;
  font-size: 12px;
  display: inline-block;
}
.login .body .form > p:active {
  color: #2c2ac4;
}
.login .mint-cell-wrapper {
  background-size: 0;
  border-bottom: 1px solid #d9d9d9;
}
.login .img {
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 20px auto;
}
.login .img div {
  width: 48px;
  height: 48px;
}
.login .img div img {
  width: 100%;
}
.login .code {
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
      //手机号
      phone: "",
      //密码
      password: "",
      //控制文本框是验证码还是密码框,默认密码框
      textshow: true,
      //控制文本为"使用验证码登录"还是"密码登录"
      pshow: true,
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
    phonemsg(htk) {
      let phoneRegExp = /^1[3-9][0-9]{9}$/;
      if (phoneRegExp.test(this.phone)) {
        return true;
      } else {
        if (htk)
          this.$toast({
            message: "手机号错误",
            position: "bottom",
            duration: 1000,
          });
        return false;
      }
    },
    passwordmsg(atk) {
      let passwordRegExp = /^[0-9A-Za-z]{8,14}$/;
      if (passwordRegExp.test(this.password)) {
        return true;
      } else {
        if (atk)
          this.$toast({
            message: "密码错误：区分大小写，要求至少8个字符且小于14个字符",
            position: "bottom",
            duration: 1000,
          });
        return false;
      }
    },
    // 当字是验证码登录时，点击后出验证码框，链接改为密码登录字
    showcodetext() {
      this.textshow = false;
      this.pshow = false;
    },
    // 出密码框，链接改为验证码登录字
    showcodetext2() {
      this.textshow = true;
      this.pshow = true;
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

    handle() {
      //当文本框是验证码框时
      if (this.textshow == false) {
        //当验证码一致时
        if (this.phonemsg(1) && this.codevalue == this.code) {
          let obj = { phone: this.phone };
          let str = this.qs.stringify(obj);
          this.axios.post("/login2", str).then((res) => {
            //登录失败
            if (res.data.code == 201) {
              MessageBox("提示", "该手机号未注册");
            }
            //登陆成功
            if (res.data.code == 200) {
              MessageBox.alert("登录成功!").then((action) => {
                // 提交Mutations,以改变用户的登录状态及信息
                this.$store.commit("loginMutation", res.data.info);
                // 将用户登录状态的相关信息存储到WebStorage中
                localStorage.setItem("isLogined", 1);
                //因为在webStorage中,键值只能为字符串,所以
                //需要通过JSON.stringify()将服务器返回对象数据转换为字符串类型,然后再通过setItem()方法添加到WebStorage中
                localStorage.setItem("info", JSON.stringify(res.data.info));
                // 跳转首页
                this.$router.push("/");
              });
            }
          });
          // 当手机号无误，验证码不一致则
        } else if (this.phonemsg(1) && this.codevalue != this.code) {
          MessageBox("提示", "验证码错误");
        }
        //当文本框是密码框时
      } else if (this.textshow == true) {
        //当账号密码无误时
        if (this.phonemsg(1) && this.passwordmsg(1)) {
          let obj = {
            phone: this.phone,
            password: this.password,
          };
          let str = this.qs.stringify(obj);
          this.axios.post("/login1", str).then((res) => {
            //登录失败
            if (res.data.code == 201) {
              MessageBox("提示", "账号或密码错误");
            }
            //登陆成功
            if (res.data.code == 200) {
              MessageBox.alert("登录成功!").then((action) => {
                // 提交Mutations,以改变用户的登录状态及信息
                this.$store.commit("loginMutation", res.data.info);
                // 将用户登录状态的相关信息存储到WebStorage中
                localStorage.setItem("isLogined", 1);
                //因为在webStorage中,键值只能为字符串,所以
                //需要通过JSON.stringify()将服务器返回对象数据转换为字符串类型,然后再通过setItem()方法添加到WebStorage中
                localStorage.setItem("info", JSON.stringify(res.data.info));
                // 跳转首页
                this.$router.push("/");
              });
            }
          });
        }
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

