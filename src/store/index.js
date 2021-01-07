import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

/* modules */
import theme from './modules/theme';

Vue.use(Vuex);

const storeModules = {
  theme,
};

// const jobState = createPersistedState({
//   paths: ['job'],
// });

export default new Vuex.Store({
  modules: storeModules,
  strict: process.env.NODE_ENV !== 'production',
  // plugins: [ jobState ],
});
