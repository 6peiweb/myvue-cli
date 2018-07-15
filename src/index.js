/// <reference path="./typings/index.d.ts" />
/// <reference path="./typings/global.d.ts" />

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
