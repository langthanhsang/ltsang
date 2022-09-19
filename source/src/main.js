import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import VueAxios from "vue-axios";
import axios from "axios";
import { createApp } from 'vue'
 // Vue.config.productionTip = false

// const app = Vue.createApp(App).use(router)
// app.use(VueAxios,{$request: axios})
// app.use('#app')


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
