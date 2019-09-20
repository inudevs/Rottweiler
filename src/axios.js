import axios from 'axios';

const API_URL = 'http://api.inudevs.com';

export default store => axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    authorization: store.getters.token,
  },
});
