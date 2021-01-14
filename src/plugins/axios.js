import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  // Do something before request is sent
  _config => _config,
  // Do something with request error
  error => Promise.reject(error),
);

// Add a response interceptor
_axios.interceptors.response.use(
  // Do something with response data
  response => response,
  // Do something with response error
  error => Promise.reject(error),
);

Plugin.install = (vue /* options */) => {
  vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
