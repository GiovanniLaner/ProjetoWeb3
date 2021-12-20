import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Register from './components/Register.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

//ROTEAMENTO
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: '/home',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
