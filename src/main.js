import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
