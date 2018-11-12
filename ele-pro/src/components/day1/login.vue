<template>
    <div id="app">
        <div class="header">
            <router-link to="/" class="a1">
            <span class="a2">&lt;</span>
            </router-link>
            密码登录
        </div>
        <!-- iview -->
    <div class="input">
        <div>
            账号 ：<input type="text" @change="name" ref="input1">
        </div>
        <div>
            密码 ：<input :type="states?'text':'password'" class="mima" @change="pass" ref="input2">
                <i-switch size="large">
        <span slot="open" @click="ons">ON</span>
        <span slot="close" @click="ons">OFF</span>
               </i-switch>
        </div>
        <div>
            验证码 ：<input type="text" class="yanzheng">
            <!-- 验证码布局 -->
            <div class="number">
                <img :src="imgStr" alt="">
            </div>
            <span>
                换一张
            </span>
        </div>
        <br>
    </div>
    <div class="text">
        温馨提示：未注册的账号，登录时将自动注册
    </div>
    <div class="text">
        注册过的账号可账号密码登录
    </div>
    <button class="btn">登录</button>
    <router-link to='/reset'>
    <div class="reset">重置密码</div>
    </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            yanzheng:[],
            imgStr:'',
            states:false
        }
    },
    created(){
        this.$ajax.ajax({
            type:'POST',
            url:'https://elm.cangdu.org/v1/captchas'
        }).then((data)=>{
            console.log(data)
            console.log(data.code)
            this.imgStr=data.code
        })
    },
    methods:{
        name(){
            console.log(this.$refs.input1.value)
        },
        pass(){
            console.log(this.$refs.input2.value)
        },
        ons(){
            this.states = !this.states
            console.log(this.states)
            console.log(11111)
        }
    }
};
</script>

<style scoped>
.reset{
    font-size: 15px;
    color: #3091e8;
    text-align: right;
    padding: 10px;
}
.btn{
    background-color: #4bd964;
    width: 95%;
    height: 60px;
    line-height: 60px;
    border-style:none;
    border-radius: 3px; 
    font-size: 25px;
    color: white;
}
.number{
    display: inline-block;
    width: 115px;
}
.text{
    color: red;
    padding: 8px 12px;
    text-align: left;
}
.mima{
    width: 66%;
}
.yanzheng{
    width: 40%;
}
.input{
    /* display: inline-block; */
    margin: 15px 0;
    outline: none;
}
input{
    height: 50px;
    width: 80%;
    border-style: none;
}
.header {
  text-align: center;
  background-color: #3091e8;
  font-size: 20px;
  color: white;
  height: 50px;
}
.a1 {
  color: white;
  line-height: 50px;
}
.a2 {
  position: absolute;
  left: 10px;
  font-size: 20px;
  line-height: 50px;
}
</style>
