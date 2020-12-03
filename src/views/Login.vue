<template>
  <div class="login">
    <!-- 顶部导航 -->
    <mt-header style="background: white">
      <!-- 返回按钮的页面路径未定 -->
      <router-link to="/" slot="left">
        <mt-button style="color: black;" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="body">
      <!-- 标题 -->
      <h2 class="title">注册</h2>
      <!-- 表单区域 -->
      <div class="form">
        <mt-field
          type="text"
          label="手机号"
          placeholder="请输入手机号"
        ></mt-field>

        <mt-field type="text" label="验证码" placeholder="请输入验证码"
          ><mt-button size="small" plain>获取验证码</mt-button></mt-field
        >

        <mt-field
          type="password"
          label="密码"
          placeholder="请输入密码"
        ></mt-field>

        <mt-button  size="large">注册</mt-button>
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
.login>.body>.form>button{
    background-color: #D95A48;
    color:white
}
</style>