<template>
    <div class="details">
        <div id="banner">
            <img src="../assets/img/fffd2a71f250e18d7a027194a09948fd.jpg" alt="">
        </div>
        <div class="nei">
            <div id="title">
                <p>正品</p>
                <p>疯狂小狗100g训练奖励零食 补钙零嘴</p>
            </div>
            <div id="jiage">
                <p>淘宝价：¥15.9</p>
                <p>京东价：¥100</p>
            </div>
        </div>
        <div class="opents">
            <div>
                <p>会员价</p>
                <p>¥9.9</p>
            </div>
            <p>98%的用户开通了会员</p>
        </div>
        <div class="nei1">
            <router-link to="javascript:;">
                <div class="v">
                    <p>在爱宠网买立省<span>6元</span>贵了包赔</p>
                </div>
            </router-link>
            <div class="mai">产品卖点</div>
            <div class="shop">
                <div v-for="(v,k) of 4" :key="k">
                    <img src="../assets/img/gou.png" alt="">
                    <span>正品保证</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .details>#banner>img{
        width: 375px;height: 373px;
    }
    .details .nei,.nei1{
        padding: 10px 15px;
        background-color: #F5F5F5;
    }
    .details #title{
        background-color: #F5F5F5;
        display: flex;
    }
    .details #title>p:first-child{
        display: inline-block;
        width: 35px;height: 22px;
        background-color: #000;
        padding: 2.5px;color: #fff;
        border-radius: 3px;
        line-height: 22px;
    }
    .details #title>p:last-child{
        font-size: 20px;color: #333;
        font-weight: bold;
        line-height: 22px;
        margin-left: 5px;
    }
    .details #jiage{
        margin-top: 25px;
        color: #666;text-decoration: line-through;
    }
    .details #jiage>p:first-child{
        background: url("../assets/img/taobao.png") no-repeat;
        padding: 2px 30px;
    }
    .details #jiage>p:last-child{
        background: url("../assets/img/jingdong.png") no-repeat;
        padding: 2px 30px;
        margin-top: 10px;
    }
    .details .opents{
        display: flex;
        background-color: #fff6e3;
        border: 1px solid #ffe9ba;
        padding: 5px 15px;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
    }
    .details .opents>div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .details .opents>div>p:first-child{
        display: inline-block;
        width: 50px;height: 20px;
        background-color: #000;
        color: #c8b590;
        font-size: 12px;border-radius: 5px;
        line-height: 20px;
        padding: 5px 0 5px 10px;
    }
    .details .opents>div>p:last-child{
        font-size: 25px;color: #D0021B;
        font-weight: bold;
        margin-left:5px ;
    }
    .details .opents>p{
        font-size: 12px;color: #333;
    }
    .v{
        height: 42px;
        background: url("../assets/img/openvip.png") no-repeat;
        background-size: 100% 42px;
    }
    .v p{
        font-size: 14px;color: #333;
        line-height: 42px;
        margin-left: 40px;
    }
    .v p>span{
        font-size: 14px;color: #D0021B;
        font-weight: bold;
        margin: 0 3px;
    }
    .mai{
        background-color: #fff6e3;
        border: 1px solid #ffe9ba;
        background: url("../assets/img/maidian.png") no-repeat left center;
        background-size: 40px 40px ;
        padding: 15px 40px;
        margin: 10px 0;
    }
    .shop{
        display: flex;
        justify-content: space-around;
    }
    .shop div>img{
        width: 17px
    }
    .shop div>span{
        font-size: 12px;color: #333;
        margin-left: 5px;
    }
</style>