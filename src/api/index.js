import axios from 'axios';
import TokenManager from '@/plugins/TokenManager';

const client = axios.create({
  headers: {
    ['Content-Type']: 'application/json;charset=UTF-8',
  },
});


client.interceptors.request.use(
  (request) => {
    if (!request.data) {
      request.data = {};
    }

    TokenManager.load();
    request.headers = {
      ...request.headers,
      ['X-CONSTANTINE-TOKEN']: `${TokenManager.get()}`,
    };

    return request;
  },

  (error) => {
    Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    if (response && response.status !== 200) {
      return Promise.reject(response);
    }

    return response;
  },
  (error) => {
    throw error;    
  },
);

export default client;
