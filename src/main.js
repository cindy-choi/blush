import Vue from 'vue'
import App from './App.vue'

/* Utilities */
import Toasted from 'vue-toasted';

/* Bootstrap */
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import '../scss/custom.scss';

/* Plugins */
import router from './router';
import store from './store';
import i18n from './i18n';
import utilities from './mixin';
import './plugins/axios';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(utilities);
Vue.use(Toasted);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
