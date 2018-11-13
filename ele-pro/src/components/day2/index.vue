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
        <four-item> </four-item>
    </div>
</template>

<script>
import list from './fourItem'
export default {
components:{'four-item':list},
    data(){
        return {
            // address:''
              value2: 0
        }
    },
    created(){
        // console.log(this.$store)
        // 组件要修改状态 通知vuex的方法 dispatch
        // this.$store.dispatch('UpdateCount',1000)
        //  this.address = this.$route.query.address;
    },
    methods:{

    }
}
</script>

<style scoped>
.tuijian{
    margin-top: 15px;
    margin-bottom: 20px;
}
.shangjia{
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;
}
img{
    width: 100%;
    height: 100%;
}
.loop{
    height: 99px;
    widows: 100%;
}
.img_box{
    margin-top: 8px;
}
.index_img{
    width: 100%;
    height: 100%;
}
.header{
    background-color: #0f95ff;
    height: 105px;
    position: relative;
}
.location{
    position: absolute;
    top: 15px;
    left: 12px;
    color: white;
    font-size: 15px;
    display: inline-block;
    widows: 80%;
    overflow: hidden;
}
.input{
    position: absolute;
    bottom: 8px;
    left: 12px;
}
</style>
