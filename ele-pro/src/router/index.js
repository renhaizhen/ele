import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/day1/page1'
import login from '@/components/day1/login'
import reset from '@/components/day1/reset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: page1
    },
    {
      path: '/login',
      // name: 'HelloWorld',
      component: login
    },
    {
      path: '/reset',
      // name: 'HelloWorld',
      component: reset
    }
  ]
})
