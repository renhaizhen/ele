// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Jq from 'jquery'
import store from './store'
import vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$ajax = Jq

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
