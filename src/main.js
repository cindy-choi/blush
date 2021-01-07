import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import '../scss/custom.scss';

/* Plugins */
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
