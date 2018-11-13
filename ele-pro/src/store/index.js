import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex 严格模式
  strict: true,
  // 状态Json
  state: {
    count: '1',
    cityId:'',
    cityName:'',
    cityname:''
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
        // 1. this.$store 这个对象 ==> store
        // 2. arg 参数 (view ==> 参数)
        //不能在这里修改的
        // store.state.count = 10;
        commit('UpcityId',arg)

    },
    async UpcityName({commit},arg){
        // 1. this.$store 这个对象 ==> store
        // 2. arg 参数 (view ==> 参数)
        //不能在这里修改的
        // store.state.count = 10;
        commit('UpcityName',arg)

    },

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
  }
})
