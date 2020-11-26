import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

Vue.config.productionTip = false
Vue.prototype.$email = ""

Vue.use(Vuelidate)

new Vue({
  router,
  vuetify,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
