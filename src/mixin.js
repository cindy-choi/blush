import utils from '@/utils';

/* export */
export default {
  install(Vue /* opt */) {
    Vue.mixin({
      computed: {
        util: () => ({
          ...utils,
        }),
      },
    });
  },
};
