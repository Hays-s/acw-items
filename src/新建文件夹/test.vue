<template>
    <div>
        <!-- 顶部导航开始 -->
        <div>
            <mt-header title="注册界面">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <router-link to="/" slot="right">登录</router-link>                  
            </mt-header>
        </div>
        <!-- 顶部导航结束 -->      
        <!-- 表单区域开始 -->
        <div>
            <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="username" @blur.native.capture="unamemsg" :state="usernameState"></mt-field>
            <mt-field type="text" label="密码" placeholder="请输入密码"  v-model="password" @blur.native.capture="upwdmsg" :state="passwordState"></mt-field>
            <mt-field type="text" label="确认密码" placeholder="请再次输入密码"  v-model="conpassword" @blur.native.capture="upwd2msg" :state="password2State"></mt-field>
            <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
        </div>
        <!-- 表单区域结束 -->        
    </div>
</template>

<script>
export default {
    data(){
      return{
          username:"",
          password:"",
          conpassword:"",
          usernameState:"",
          passwordState:"",
          password2State:""

      }
    },
    methods:{
        unamemsg(){
            let usernameRegExp=/^[0-9A-Za-z]{6,12}$/;
            if(usernameRegExp.test(this.username)){
                this.usernameState="success"
                return true; 
            }else{
                // 简写：this.$toast("用户名错误")
                // console.log("用户名错误")
                this.$toast({
                    message:"用户名错误",
                    position:"top",
                    duration:500
                });
                this.usernameState="error"
                 return false;      
            }
                      
        },
        upwdmsg(){
            let passwordRegExp=/^[0-9A-Za-z]{8,12}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState="success"
                return true; 
            }else{
                this.$toast({
                    message:"密码错误",
                    position:"middle",
                    duration:500
                });  
                this.passwordState="error"
                 return false;      
            }            
        },
        upwd2msg(){
            if(this.password==this.conpassword){
                return true; 
            }else{
                this.$toast({
                    message:"密码不一致",
                    position:"bottom",
                    duration:500                    
                });
                return false; 
            }               
        },
        //用户注册
        handle(){
            if(this.unamemsg() && this.upwdmsg() && this.upwd2msg()){
                 
            } ;
        },                
    }   
}
</script>