<template>
    <div class="details">
        <div id="banner">
            <img src="../assets/details/fffd2a71f250e18d7a027194a09948fd.jpg" alt="">
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
                    <img src="../assets/details/gou.png" alt="">
                    <span>正品保证</span>
                </div>
            </div>
        </div>
        <div class="xiang">
            <div class="title">
                <p>商品详情</p>
                <div class="chan">
                    <p>产地：中国</p>
                </div>
                <div>
                    <img src="../assets/details/f626deb6c94d587db133badbfc1c8d9f (1).jpg" alt="">
                </div>
                <div>
                    <img src="../assets/details/3dfe37a3933d6b71ed1bb4be29945de6.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/details/108fa04863d2c419626d75ee9d1d9f80.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/details/dbc7b19b48d738a66006836518f7aa34.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/details/082a274ace2bd79b2ab3acfa1d8b3ca3.jpg" alt="">
                </div>
                <div>
                    <img src="../assets/details/92becbc30fce6ab5b6346866c194d142.jpg" alt="">
                </div>
                <div class="shuo">
                    <p><b>价格说明</b></p>
                    <p><b>非会员购买价：</b>是您未成为爱宠会员购买商品的价格</p>
                    <p><b>会员专享价：</b>是您已成为爱宠会员购买商品的价格划线价：可能是商品的专柜价、吊牌价、零售价、指导价或该商品曾经展示的销售价等，并非《价格法》、《禁止价格欺诈行为得规定》规定的”原价”，仅供您参考。</p>
                    <p><b>特别提示：</b>最终成交价格可能因为您是会员或者非会员或者使用优惠券等发生变化，最终以该订单结算页的价格为准。</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div>
                <div>
                    <router-link to="javascript:;">
                        <img src="../assets/details/ft1-on.png" alt="">
                        <p>更多</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="javascript:;">
                        <img src="../assets/details/ft2.png" alt="">
                        <p>客服</p>
                    </router-link>
                </div>
            </div>
            <div>
                <button>
                    <router-link to="javascript:;">立即购买</router-link>
                </button>
                <button>
                    <router-link to="javascript:;">领取会员</router-link>
                </button>
            </div>
        </div>
    </div>
</template>
<style>
    .details>#banner>img{
        width: 100%;
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
        background: url("../assets/details/taobao.png") no-repeat;
        padding: 2px 30px;
    }
    .details #jiage>p:last-child{
        background: url("../assets/details/jingdong.png") no-repeat;
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
        background: url("../assets/details/openvip.png") no-repeat;
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
        background: url("../assets/details/maidian.png") no-repeat left center;
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
    .xiang{
        background-color: #fff;
    }
    .xiang>.title{
        padding: 10px 15px;
    }
    .xiang>.title>p{
        font-size: 20px;color: #333;
        font-weight: bold;
        margin-top: 20px;
    }
    .xiang .chan{
        font-size: 12px;color: #333;
        height: 40px;
        background-color: #F1F1F1;
        margin: 10px 0;
    }
    .xiang .chan>p{
        line-height: 40px;
        padding-left: 10px;
    }
    .xiang img{
        width: 100%;
    }
    .shuo{
        background-color: #F1F1F1;
        padding: 10px;
        font-size: 12px;color: #333;
        line-height: 18px;
        margin-bottom: 50px;
    }
    .shuo p>b{
        font-weight: bold;
    }
    .bottom{
        height: 50px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #F1F1F1;
        position: fixed;
        background-color: #fff;
        left: 0;right: 0;top: 0;z-index: 10;
        top: 92.5%;
    }
    .bottom img{
        width: 30px;
        border: 0;
    }
    .bottom p{
        font-size: 12px;color: #4a4a4a;
    }
    .bottom>div:first-child{
        display: flex;
    }
    .bottom>div:first-child>div>a{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .bottom>div:first-child>div{
        margin-left: 15px;
        margin-top: 3px;
    }
    .bottom>div:first-child>div:last-child{
        margin-left: 25px;
    }
    .bottom>div:last-child{
        display: flex;
    }
    .bottom button,.bottom button>a{
        width: 8rem;height: 100%;
        border: 0;
        font-size: 15px;color: #fff;
    }
    .bottom button:first-child{
        background-color: #DD1A21;
    }
    .bottom button:last-child{
        background-color: #FF7300;
    }
    .bottom>div{
        border-top: 0;
    }
</style>