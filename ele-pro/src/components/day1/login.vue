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
            账号 ：<input type="text" @change="name" ref="input1" placeholder="请输入5-10位字符，字母开头">
        </div>
        <div>
            密码 ：<input :type="states?'text':'password'" class="mima" @change="pass" ref="input2" placeholder="请输入6-26位字符,字母开头">
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

    <!-- <form action="http://localhost:8090" method="POST">
        <input type="text" name="user">
        <input type="password" name="pass">
        <input type="submit" value="提交">

    </form> -->

    <button class="btn" @click="login">登录</button>
    <router-link to='/reset'>
    <div class="reset">重置密码</div>
    </router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      yanzheng: [],
      imgStr: "",
      states: false,
      username: "",
      password: "",
      nameStatus: false,
      passStatus: false,
    };
  },
  created() {
    this.$ajax
      .ajax({
        type: "POST",
        url: "https://elm.cangdu.org/v1/captchas"
      })
      .then(data => {
        console.log(data);
        console.log(data.code);
        this.imgStr = data.code;
      });
  },
  methods: {
    name() {
      console.log(this.$refs.input1.value);
      this.username = this.$refs.input1.value;
      if (/^[a-zA-Z]\d{4,9}/gi.test(this.username)) {
        this.nameStatus = true;
        console.log("✔");
      } else {
        alert("请按格式输入");
      }
    },
    pass() {
      console.log(this.$refs.input2.value);
      this.password = this.$refs.input2.value;
      if (/^[a-zA-Z]\w{5,25}/gi.test(this.password)) {
        this.passStatus = true;
        console.log("✔");
      } else {
        alert("请按格式输入");
      }
    },
    ons() {
      this.states = !this.states;
      console.log(this.states);
      console.log(11111);
    },
    login() {
      console.log(123);
      if (this.nameStatus == 1 && this.passStatus == 1) {
        this.$ajax.ajax({
          type: "POST",
          url: "/Api",
          data: {
            type: "login",
            user: this.$refs.input1.value,
            pass: this.$refs.input2.value
          }
        });
      } else {
        alert("请检查输入情况");
      }
    }
  }
};
</script>

<style scoped>
.reset {
  font-size: 15px;
  color: #3091e8;
  text-align: right;
  padding: 10px;
}
.btn {
  background-color: #4bd964;
  width: 95%;
  height: 60px;
  line-height: 60px;
  border-style: none;
  border-radius: 3px;
  font-size: 25px;
  color: white;
}
.number {
  display: inline-block;
  width: 115px;
}
.text {
  color: red;
  padding: 8px 12px;
  text-align: left;
}
.mima {
  width: 66%;
}
.yanzheng {
  width: 40%;
}
.input {
  /* display: inline-block; */
  margin: 15px 0;
  outline: none;
}
input {
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
