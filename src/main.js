import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import axios from 'axios'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.prototype.$bus = new Vue();