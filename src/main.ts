import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'element-ui'
import axios from 'axios'

Vue.component(Button.name, Button)
Vue.config.productionTip = false

Vue.prototype.axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
