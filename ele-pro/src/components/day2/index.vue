<template>
    <div>
          <div class="header"> 
              <router-link to='/'>
            <span class="location"><Icon type="ios-pin" />{{$store.state.count}} <Icon type="md-arrow-dropdown" /></span>
            </router-link>  
            <template>
               <Input  placeholder="搜索饿了吗商家，商品名称" style="width: 390px" class="input" />
           </template>
         </div>    
         <div class="img_box">
             <img src="static/index1.png" alt="" class="index_img">
         </div> 
         <template>
    <div class="loop">
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="static/loop1.webp" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="static/loop2.webp" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="static/loop3.webp" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="static/loop4.webp" alt=""></div>
        </CarouselItem>
    </Carousel>
    </div>
        </template>
        <div class='tuijian'>——<span class='shangjia'>推荐商家</span>—— </div>
        <div v-bind:class="{ active: isActive }">
        <four-item class="listItem"> </four-item>
        </div>
         <div v-for="(item,index) in foodList" :key="index" class='box'>
          <div class='list'>   
        <div class='left'>
           <template v-if="item.restaurant.image_path.substr(-4)=='jpeg'">
                    <img :src="'https://fuss10.elemecdn.com/'+item.restaurant.image_path.substr(0,1)+'/'+item.restaurant.image_path.substr(1,2)+'/'+item.restaurant.image_path.substr(3,item.restaurant.image_path.length-3)+'.'+item.restaurant.image_path.substr(-4)" class="user_img" alt="">
                </template>
                <template v-else>
                    <img :src="'https://fuss10.elemecdn.com/'+item.restaurant.image_path.substr(0,1)+'/'+item.restaurant.image_path.substr(1,2)+'/'+item.restaurant.image_path.substr(3,item.restaurant.image_path.length-3)+'.'+item.restaurant.image_path.substr(-3)" class="user_img" alt="">
           </template>
        </div>
        <div class='right'>
        <h4>{{item.restaurant.name}}</h4>
         <Rate v-model="item.restaurant.rating" disabled/>
         <span>月售{{item.restaurant.recent_order_num}}</span>
          <div> 
              <span>￥{{item.restaurant.float_minimum_order_amount}}起送</span> |<span>{{item.restaurant.piecewise_agent_fee.description}}</span>
              <span class='miles'>{{(item.restaurant.distance)/1000}}千米</span>  <span>{{item.restaurant.order_lead_time}}分钟</span>
          </div>
          <div class='bt_box'>
              <span class='bt'>{{item.restaurant.support_tags[0].text}}</span>
              <span class='bt' v-if=item.restaurant.support_tags[0].type>品质联盟</span>
          </div>
          <div><span class='first'>首</span><span>新用户下单立减{{item.restaurant.piecewise_agent_fee.rules[0].price}}</span></div>
          <div><span class='jian'>减</span><span>满{{item.restaurant.piecewise_agent_fee.rules[0].price}} 减{{item.restaurant.piecewise_agent_fee.rules[0].fee}}</span></div>
        </div>
        </div>
        </div>
        <template>
    <BackTop>
       
    </BackTop>
    </template>
    </div>
</template>

<script>
import list from "./fourItem";
export default {
  components: { "four-item": list },
  data() {
    return {
      // address:''
      value2: 0,
      foodList: [],
      list: [],
      latitude: "",
      longitude: "",
      isActive: false,
    };
  },
  created() {
    this.latitude = this.$store.state.latitude;
    this.longitude = this.$store.state.longitude;
    // console.log(this.latitude, this.longitude);
    // console.log(this.$store)
    // 组件要修改状态 通知vuex的方法 dispatch
    //  this.$store.dispatch('foodListArr')
    // this.$ajax
    //   .ajax({
    //     type: "GET",
    //     url:
    //       "/Shop/shopping/v3/restaurants?latitude=" +
    //       this.latitude +
    //       "&longitude=" +
    //       this.longitude +
    //       "&limit=10"
    //   })
    //   .then(data => {
    //     this.foodList = data.items;
    //     console.log(data);
    //   });
    // this.foodList=this.foodList.json()

    this.$ajax
      .ajax({
        url: "/Shops/v3",
        data: {}
      })
      .then(data => {
        console.log(data);
        this.foodList = data.items;
      });
  },
  mounted() {
    // 缓存指针
    let _this = this;
    // 设置一个开关来避免重负请求数据
    let sw = true;

    // 注册scroll事件并监听
    window.addEventListener("scroll", function() {
      // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
      // console.log(document.documentElement.scrollTop); // 滚动高度
      // console.log(window.innerHeight);
      // console.log(window.innerWidth);
      // console.log(document.body.offsetHeight); // 文档高度
      //动态绑定类
      if(document.documentElement.scrollTop>=680){
        console.log(123)
        _this.isActive=true
      }else if(document.documentElement.scrollTop<680){
        _this.isActive=false
      }
      // 判断是否滚动到底部
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.body.offsetHeight
      ) {
        // console.log(sw);
        // 如果开关打开则加载数据
        if (sw == true) {
          // 将开关关闭
          sw = false;
          _this.foodList.forEach(function(val, index) {
                _this.foodList.push(val);
                console.log(val)
              });
              sw = true;
            
        }
      }

    });
  },
  methods: {}
};
</script>

<style scoped>
.listItem{
    display: flex;
  justify-content: space-around;
}
.active{
  position: fixed;
  top: 0px;
  /* left: 15%; */
  height: 30px;
  background-color: white;
  z-index: 2;
  width: 100%;
}
.miles {
  margin-left: 40px;
}
.bt_box {
  margin: 10px 0 15px 0;
}
.bt {
  display: inline-block;
  border-radius: 2px;
  border: 1px solid #cccccc;
}
.first {
  background-color: yellowgreen;
  color: white;
  margin-right: 6px;
}
.jian {
  background-color: pink;
  color: white;
  margin-right: 6px;
}
.list {
  overflow: hidden;
}
.left {
  float: left;
  width: 22.14975845410628%;
  margin-left: 10px;
}
.right {
  float: right;
  width: 75.29468599033816%;
  padding: 15px;
  text-align: left;
}
.tuijian {
  margin-top: 15px;
  margin-bottom: 20px;
}
.shangjia {
  font-size: 16px;
  font-weight: bold;
  margin: 0 5px;
}
img{
    width: 100%;
  height: 100%;
}
.user_img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.loop {
  height: 99px;
  widows: 100%;
}
.img_box {
  margin-top: 8px;
}
.index_img {
  width: 100%;
  height: 100%;
}
.header {
  background-color: #0f95ff;
  height: 105px;
  position: relative;
}
.location {
  position: absolute;
  top: 15px;
  left: 12px;
  color: white;
  font-size: 15px;
  display: inline-block;
  widows: 80%;
  overflow: hidden;
}
.input {
  position: absolute;
  bottom: 8px;
  left: 12px;
}
</style>
