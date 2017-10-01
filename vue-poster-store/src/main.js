import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

export const cartBus = new Vue(); 
Vue.use(VueResource)
Vue.http.options.root = 'https://api.imgur.com/3/';


new Vue({
  el: '#app',
  render: h => h(App)
})
