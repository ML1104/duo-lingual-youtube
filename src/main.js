import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(VueRouter)

import English from './components/English'
import Serbian from './components/Serbian'

const routes = [
    { path: '/eng', component: English },
    { path: '/srb', component: Serbian }
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
