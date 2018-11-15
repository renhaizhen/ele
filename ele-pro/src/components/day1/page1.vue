<template>
    <div>
        <div class="header">
            <span class="e1">ele.me</span>
            <router-link to="/login" class="aa">
            <span class="e2">登录|注册</span>
            </router-link>
        </div>
        <div class="location">
            <span class="c1">当前定位城市：{{address}}</span>
            <span class="l1">定位不准时请在城市列表中选择</span>
        </div>
        <div class="l_c"> 
            <span class="a1">郑州</span>
            <span class="a2" @click="location">></span>
        </div>
        <div class="hot_city">
            <div class="b1">
                <span class="b2">热门城市</span>
            </div>
            <div class="h_list">
                <span  v-for="(item,index) in hot_city" :key="index">
                    <span class="h-list2">{{item.name}}</span> 
                </span>
            </div>
        </div>
        <div class="nav">
            <div class="ding">定位城市</div>
            <div v-for="(item,index) in arr" :key="index" class="nav_list" @click="fn('#'+item)">
               <span :herf='item'> {{item}}</span>
            </div>
        </div>
        <div>            
            <div class="h_list all_city">
                 <div  @click="fn2(index)">
                <span  v-for="(item,index) in all_city" :key="index">
                   
                    <div class="A" :id="'#'+index">
                        <span class="A1"> {{index}} (按字母排序)</span>
                    </div>
                    <span v-for="(city,index) in item" :key="index"> 
                      <router-link :to="{'path':'/select','query':{ 'id':'cityID','cityname':'cityName' }}">
            <span class="h-list2 h-list3" @click="select($event)" :value='city.id' :cityName='city.name' :latitude='city.latitude' :longitude='city.longitude'>{{city.name}}</span>
                      </router-link>                        
                    </span>
                   
                </span>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
// import login from './login'
// import reset from './reset'
export default {
  data() {
    return {
      hot_city: [],
      all_city: [],
      arr: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      index:'#E',
      address:'',
      latitude: "34.75661006",
      longitude: "113.64964385",
      cityID:'',
      cityName:'',
      limit:10,
    };
  },
  created() {
    // var _this = this;
    // this.$ajax.ajax({
    //       type: "GET",
    //       url: "Shop/shopping/v3/restaurants?latitude="+this.latitude+'&longitude='+this.longitude+'&limit='+this.limit
    //     })
    //     .then(data => {
    //       console.log(data);
    //     });

    this.$ajax
      .ajax({
        url: "https://elm.cangdu.org/v1/cities?type=hot"
      })
      .then(data => {
        console.log(data);
        this.hot_city = data;
      });
    this.$ajax
      .ajax({
        url: "https://elm.cangdu.org/v1/cities?type=group"
      })
      .then(data => {
        console.log(data);
        this.all_city = data;
      });
          // 百度地图API功能
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){			
      // alert('您的位置：'+r.point.lng+','+r.point.lat);   
      // this.latitude=r.point.lng
      // this.longitude=r.point.lat  
      // console.log(this.latitude,this.longitude)
	})
  },
  methods: {
    fn(num) {
      console.log(num);
      this.index=num
    },
    fn2(index){
        console.log(index)
        this.index='#'+this.index
    },
    location(){
      //地图
      this.$ajax
      .ajax({
       url:'https://elm.cangdu.org/v2/pois/34.75661006,113.64964385'
      })
      .then(data => {
        console.log(data);
        this.address = data.city;
      });
    },
    select(e){
      this.cityID=e.target.getAttribute('value')
      this.cityName=e.target.getAttribute('cityName')
      this.latitude = e.target.getAttribute('latitude')
      this.longitude = e.target.getAttribute('longitude')
      console.log(e.target.getAttribute('value'))
      console.log(this.cityID)
      console.log(this.cityName)
      this.$store.dispatch('UpcityId',this.cityID)
      this.$store.dispatch('Uplatitude',this.latitude)
      this.$store.dispatch('Uplongitude',this.longitude)
    }
  },
  computed: {}
};
</script>

<style scoped>
.aa{
    text-decoration: none;
    color: white;
    margin-top: 10px;
}
.ding {
  width: 32px;
}
.nav {
  position: fixed;
  z-index: 1;
  top: 379px;
  right: 8px;
  font-size: 15px;
}
.nav_list {
  margin: 3px 0;
  font-size: 12px;
}
.header,
.location,
.l_c {
  display: flex;
  justify-content: space-between;
}
.c1,
.l1,
.e1,
.e2 {
  margin: 12px;
}
.header {
  background-color: #3091e8;
  color: white;
}
.c1,
.a2 {
  font-size: 12px;
  color: #aaaaaa;
}
.l1 {
  font-size: 10px;
  color: #777777;
}
.l_c {
  border-top: 1px solid #cccccc;
  border-bottom: 1.5px solid #cccccc;
}
.a1,
.a2 {
  margin: 12px;
  display: inline-block;
}
.a2 {
  font-size: 22px;
}
.a1 {
  font-size: 20px;
  color: #3091e8;
}
.b1 {
  border-top: 1.5px solid #cccccc;
  text-align: left;
}
.b2 {
  margin: 10 px;
  padding: 5px;
  display: block;
}
.hot_city {
  margin: 15px 0;
}
.h-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 380px;
}
.h-list2 {
  border: 1px solid #cccccc;
  display: inline-block;
  width: 101px;
  height: 45px;
  line-height: 45px;
  color: #3091e8;
}
.all_city {
  width: 380px;
}
.A {
  border-top: 1.5px solid #cccccc;
  border-bottom: 1.5px solid #cccccc;
  text-align: left;
}
.A1 {
  font-size: 16px;
  color: #aaaaaa;
  margin: 12px;
  display: block;
}
.h-list3 {
  color: #777777;
  overflow: hidden;
}
</style>