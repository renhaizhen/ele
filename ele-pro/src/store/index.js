import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex 严格模式
//   strict: true,
  // 状态Json
  state: {
    count: '1',
    cityId:'',
    cityName:'',
    cityname:'',
    latitude:'',
    longitude:'',
    foodListArr:[]
  },
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  actions:{
    async UpdateCount({commit},arg){
        // 1. this.$store 这个对象 ==> store
        // 2. arg 参数 (view ==> 参数)
        //不能在这里修改的
        // store.state.count = 10;
        commit('UpdateCount',arg)

    },
    async UpcityId({commit},arg){

        commit('UpcityId',arg)

    },
    async UpcityName({commit},arg){

        commit('UpcityName',arg)

    },
    // 纬度
    async Uplatitude({commit},arg){

        commit('Uplatitude',arg)

    },
    //径度
    async Uplongitude({commit},arg){
        commit('Uplongitude',arg)

    },
    // async foodListArr({commit}){
    //     let latitude = this.$store.state.latitude
    //     let longitude = this.$store.state.longitude
    //     let data = await (
    //         await fetch("Shop/shopping/v3/restaurants?latitude="+latitude+'&longitude='+longitude+'&limit=10')
    //       ).json()
    //       commit('foodListArr', data)
    // }

  },
  // Mutation 必须是同步函数
  mutations:{
    UpdateCount (state,arg) {
        console.log(arg)
        state.count = arg;
    },
    UpcityId (state,arg) {
        console.log(arg)
        state.cityId = arg;
    },
    UpcityName (state,arg) {
        console.log(arg)
        state.UpcityName = arg;
    },
    Uplatitude (state,arg) {
        console.log(arg)
        state.latitude = arg;
    },
    Uplongitude (state,arg) {
        console.log(arg)
        state.longitude = arg;
    },
    // foodListArr (state, arg) {
    //     state.foodListArr = arg
    //   },
  }
})
