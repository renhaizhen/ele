<template>
  <div class="wrap">
    <div class="title">
      <div><router-link to="/" class="prev">&lt;</router-link></div>
      <p>{{city}}</p>
      <p class="switch">切换城市</p>
    </div>
    <div class="content">
      <input @blur.prevent="select" type="text" ref="search" placeholder="输入学校，商务楼，地址">
      <input type="submit" value="提交">
      <div style="text-align: left;">搜索历史</div>
      <div class="select">         
        <div v-if="searchAll.length" v-for="(item,index) in searchAll" :key="index" @click="thePlace(item.latitude,item.longitude)">
             <router-link :to="{'path':'/index'}">
          <p @click="fn($event)" :value='item.address' :name='item.name' :latitude='item.latitude' :longitude='item.longitude'>{{item.name}}</p>      
            </router-link>     
          <p>{{item.address}}</p>
 
        </div>
        <div  v-for="(item,index) in searchHistory" :key="index+'w'">
          <p class="history">{{item}}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      city: "",
      search:'',
      searchAll:[],
      cityAdd:'',
      name:'',
      searchHistory:[],
      latitude:'',
      longitude:''
    };
  },
  // 获取传值
  created() {
    this.id = this.$route.query.cityID;
    this.searchHistory= window.localStorage['addname'].split(',');
    // this.city = this.$route.query.city;
  },
  methods: {
    select(){
      let keyword = this.$refs.search.value;
      this.$ajax.ajax({
        url:'https://elm.cangdu.org/v1/pois?city_id='+this.id+'&keyword='+keyword
      }).then( data => {
        this.searchAll = data
        console.log(this.searchAll)
      })
    },
    thePlace(latitude,longitude){
      // 路由跳转
    //   this.$route.push({
    //     path: "/city",
    //     query: {
    //       id: this.id,
    //       city: this.city
    //     }
    //   })
    },
    fn(e){
        console.log(123)
        this.cityAdd = e.target.getAttribute('value')
        this.name = e.target.getAttribute('name')
        // this.latitude = e.target.getAttribute('latitude')
        // this.longitude = e.target.getAttribute('longitude')
        console.log(this.cityAdd)
        this.$store.dispatch('UpdateCount',this.name)
        // this.$store.dispatch('Uplatitude',this.latitude)
        // this.$store.dispatch('Uplongitude',this.longitude)
        window.localStorage['addname']= window.localStorage['addname']+','+this.name
        console.log(this.searchHistory)
    }
  }
};
</script>

<style scoped>
.history{
    padding: 15px;
}
.prev{
    color: white;
    font-size: 15px;
    z-index: 5;
}
.wrap {
  position: relative;
  background-color: #eee;
}
.title {
  height: 50px;
  color: white;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3091e8;
  margin-bottom: 10px;
}
.title .switch {
  font-size: 1rem;
}
.content {
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
.content input {
  width: 95%;
  height: 35px;
  display: block;
  margin: 0 auto;
  padding-left: 10px;
  border: 1px solid #ccc;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.content input:nth-child(2){
  background-color: #3091e8;
  color: #fff;
}
.content> div{
  width: 95%;
  margin: 0 auto;
}
.select>div{
  padding: 10px 0;
  border-bottom: 1px solid #eee
}
.select p:nth-child(1){
  font-size: 1.1rem;
}
.select p:nth-child(2){
  font-size: .8rem;
  color: #888;
}
</style>