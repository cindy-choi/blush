import client from '@/api';
import BASE from '@/api/url';

export default {
  dev: {
    auth: {
      getToken: () => client.post(`${BASE.A3S.DEV}/auth/login`, {
        userId: process.env.VUE_APP_ADMIN_ID_DEV,
        userPassword: process.env.VUE_APP_ADMIN_PW_DEV,
      }),
    },
    user : {
      create: (params) => client.post(`${BASE.A3S.DEV}/users`, params),
    },
    
  },

  qa: {
    auth: {
      getToken: () => client.post(`${BASE.A3S.QA}/auth/login`, {
        userId: process.env.VUE_APP_ADMIN_ID_QA,
        userPassword: process.env.VUE_APP_ADMIN_PW_QA,
      }),
    },
    user : {
      create: (params) => client.post(`${BASE.A3S.QA}/users`, params),
    },
  },
};
