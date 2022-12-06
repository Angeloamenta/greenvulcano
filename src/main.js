import Vue from 'vue'
import App from './App.vue'


import axios from 'axios'
import VueAxios from 'vue-axios'

import bootstrap from 'bootstrap'

import '../src/assets/scss/style.scss'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
