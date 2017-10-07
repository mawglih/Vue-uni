import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

Vue.use(VueResource);
Vue.http.options.root = 'http://www.omdbapi.com/';


new Vue({
    el: '#app',
    render: h => h(App)
})