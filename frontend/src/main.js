import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import auth from '@/auth'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

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
