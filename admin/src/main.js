import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuetify)

const router = new VueRouter({routes, mode: 'history'});

new Vue({
  vuetify,
  router,
  render: h => h(App)
  
}).$mount('#app')