import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import auth from './auth'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import firebase from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import GSignInButton from 'vue-google-signin-button'
import VueCookies from 'vue-cookies'
Vue.use(GSignInButton)
Vue.use(require('vue-cookies'))
Vue.use(VueCookies)

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  vuetify,
  Vuelidate,
  beforeCreate () {
    auth.init(this)
  },
  render: h => h(App)
}).$mount('#app')
