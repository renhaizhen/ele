<template>
    <div id="app">
        <div class="header">
            <router-link to="/login" class="a1">
            <span class="a2">&lt;</span>
            </router-link>
            重置密码
        </div>
        <!-- iview -->
    <div class="input">
        <div>
            账号 ：<input type="text" @change="name" ref="input1" placeholder="请输入您的账号">
        </div>
        <div>
            旧密码 ：<input type="password" @change="pass" ref="input2" placeholder="请输入您的旧密码">
        </div>
        <div>
            新密码 ：<input type="password" @blur.prevent="newpass" ref="input3" placeholder="请输入您的新密码">
        </div>
        <div>
            确认密码 ：<input :type="states?'text':'password'" class="mima" @change="pass" ref="input4" placeholder="请确认您的新密码">
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


    <button class="btn" @click="btn">确认修改</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            yanzheng:[],
            imgStr:'',
            states:false,
            username:'',
            password:'',
            nameStatus:false,
            passStatus:false
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
            this.username=this.$refs.input1.value
        },
        pass(){

        },
        btn(){
            console.log(this.$refs.input2.value)
            this.password = this.$refs.input2.value

            this.$ajax.ajax({
            type:'POST',
            url:'/Api',
            data:{
                type:'reset',
                user:this.$refs.input1.value,
                pass:this.$refs.input3.value
            }
        }).then((data)=>{
                console.log(data)
            })
        },
        newpass(){
            if(this.$refs.input3.value===this.$refs.input4.value){
                console.log('两次密码输入一致')
            }else{
                alert('两次密码输入不一致')
            }
        },
        ons(){
            this.states = !this.states
            console.log(this.states)
            console.log(11111)
        },
        // login(){
        //     console.log(123)
        //     if(this.nameStatus==1&&this.passStatus==1){
        //     this.$ajax.ajax({
        //     type:'POST',
        //     url:'/Api',
        //     data:{
        //         user:this.$refs.input1.value,
        //         pass:this.$refs.input2.value
        //     }
        // })
        // }else{
        //     alert('请检查输入情况')
        // }
        // }
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
