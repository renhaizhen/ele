import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/day1/page1'
import login from '@/components/day1/login'
import reset from '@/components/day1/reset'
import select from '@/components/day1/select'
import index from '@/components/day2/index'
import search from '@/components/day2/search'
import details from '@/components/day2/details'
import my from '@/components/day2/my'
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
    },
    {
      path: '/select',
      // name: 'HelloWorld',
      component: select
    },
    {
      path: '/index',
      // name: 'HelloWorld',
      component: index
    },
    {
      path: '/search',
      // name: 'HelloWorld',
      component: search
    },
    {
      path: '/details',
      // name: 'HelloWorld',
      component: details
    },
    {
      path: '/my',
      // name: 'HelloWorld',
      component: my
    }
  ]
})
