<template>
    <div class="details">
        <acw-header></acw-header>
        <div id="banner">
            <img :src="banner" alt="">
        </div>
        <div class="nei">
            <div id="title">
                <p>正品</p>
                <p>{{info.subject}}</p>
            </div>
            <div id="jiage">
                <p>淘宝价：¥{{info.taobao.toFixed(2)}}</p>
                <p>京东价：¥{{info.jd.toFixed(2)}}</p>
            </div>
        </div>
        <div class="opents">
            <div>
                <p>会员价</p>
                <p>¥{{info.price.toFixed(2)}}</p>
            </div>
            <p>98%的用户开通了会员</p>
        </div>
        <div class="nei1">
            <router-link to="javascript:;">
                <div class="v">
                    <p>在爱宠网买立省<span>{{(info.taobao-info.price).toFixed(0)}}元</span>贵了包赔</p>
                </div>
            </router-link>
            <div class="mai">产品卖点</div>
            <div class="shop">
                <div v-for="(v,k) of 4" :key="k">
                    <img src="../assets/index_imag/gou.png" alt="">
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
                <div v-for="(v,k) of image" :key="k">
                    <img :src="v" alt="">
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
                    <router-link to="/aichong">
                        <img src="../assets/index_imag/ft1-on.png" alt="">
                        <p>商品</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/quesansw">
                        <img src="../assets/index_imag/ft2.png" alt="">
                        <p>问答</p>
                    </router-link>
                </div>
            </div>
            <div>
                <button @click="gou">立即购买</button>
                <button>
                    <router-link to="">领取会员</router-link>
                </button>
            </div>
            <mt-popup v-model="popupVisible" position="bottom" pop-transition="popup-fade" model class="gou">
                <div>
                    <div class="top">
                        <p>已选商品</p>
                    </div>
                    <div class="main">
                        <div class="image">
                            <img :src="banner" alt="">
                        </div>
                        <div class="right">
                            <div>
                                <p>{{info.subject}}</p>
                                <p>¥{{info.price.toFixed(2)}}</p>
                            </div>
                            <div>
                                <button @click="jian"><span>-</span></button>
                                <span>{{n}}</span>
                                <button @click="jia"><span>+</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div>
                            <img src="../assets/details/gouwuche.png" alt="">
                            <p id="p1">¥{{(info.price*n).toFixed(2)}}</p>
                        </div>
                        <mt-button type="primary" @click="cart">立即购买</mt-button>
                    </div>
                </div>
            </mt-popup>
        </div>
    </div>
</template>
<style>
    .details{margin-top: 1.3rem}
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
        text-align: center;
        font-size: 15px;
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
        font-size: 15px;
    }
    .details #jiage>p:last-child{
        background: url("../assets/details/jingdong.png") no-repeat;
        padding: 2px 30px;
        margin-top: 10px;
        font-size: 15px;
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
        font-size: 15px;
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
        height: 1.47rem;
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
        width: 3.5rem;height: 100%;
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
    .gou{
        width: 100%;background-color: #F5F5F5;
        height: 200px;
    }
    .image>img{
        width: 80px;height: 80px;
        background-color: lightgrey;
        border-radius: 5px;
        margin-right:5px ;
    }
    .main{
        display: flex;
        justify-content: space-around;
        padding: 10px 15px;
        border-bottom: 1px solid #ccc;
    }
    .right>div:first-child>p:first-child{
        font-size: 14px;font-weight: bold;
        color: #333;
    }
    .right>div:first-child>p:nth-child(2){
        font-size: 14px;font-weight: bold;
        color: #DD1A21;
        margin-top: 10px;
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 20px;
    }
    .right>div:last-child{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 15px;
    }
    .right>div:last-child>button{
        width: 25px;height: 25px;
        border-radius: 50%;
        text-align: center;
        outline: none;
    }
    .right>div:last-child>button:first-child{
        border: 1px solid lightblue;
        background-color: #fff;
    }
    .right>div:last-child>button:first-child>span{
        color: rgb(48, 180, 224);
        font-size: 16px;font-weight: bold;
    }
    .right>div:last-child>button:last-child{
        background-color: rgb(63, 163, 226);
    }
    .right>div:last-child>span{
        margin: 0 5px;
        font-size: 15px;
    }
    .gou .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0 5px 30px;
    }
    .gou .top>button{
        font-size: 14px;
        background-color: transparent;
        width: 100px;
        color: #999;
    }
    .gou .top>p{
        font-size: 14px;color: #333;
        font-weight: bold;
    }
    .gou .bottom{
        display: flex;
        justify-content: space-between;
        padding: 10px 15px 10px 25px;
        position: relative;
    }
    .gou .bottom>div{
       display: flex;
       justify-content: space-around;
       align-items: center;
    }
    .gou .bottom>div>p{
        font-size: 18px;color: #DD1A21;
        margin-left: 10px;
    }
    .gou .bottom>.mint-button{
        height: 40px;width: 100px;
        background-color: #DD1A21;
    }
</style>
<script>
import acwHeader from '../components/acwHeader.vue'
export default {
    data(){
        return{
            info:{price:0,taobao:0,jd:0},
            image:[],
            banner:'',
            n:1,
            popupVisible:false,
        }
    },
    methods:{
        gou(){
            this.popupVisible=true;
        },
        jian(){
            if(this.n>1){
                this.n--;
            }
        },
        jia(){
            this.n++;
        },
        cart(){
            if(localStorage.getItem('isLogined')==1){
                let obj={
                    number:this.n,
                    price:this.info.price,
                    avatar:this.banner,
                    subject:this.info.subject,
                    uid:this.$store.state.info.id
                }
                this.axios.post('/cart',this.qs.stringify(obj)).then(res=>{
                    if(res.data.code==200){
                        this.$router.push('/aichong');
                    }
                })
            }else{
                this.$router.push('/login');
            }
        }
    },
    mounted(){
        // console.log(this.$store.state.info.id)
        this.axios.get('/details',{params:{lid:this.$route.params.lid}}).then(res=>{
            this.info=res.data.results;
            let img=res.data.results.image.split("#");
            let image=[]
            for(var item of img){
                this.info.image=require("../assets/details_image/"+item)
                image.push(this.info.image);
            }
            this.banner=image.shift()
            this.image=image;
        })
    },
        components:{
        acwHeader
    }
}
</script>