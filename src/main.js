import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store: new Vuex.Store(),
  render: h => h(App)
}).$mount('#app')
