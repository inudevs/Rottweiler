import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({
  path: './env/.secret.env',
});

const { API_URL } = process.env;

export default store => axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    authorization: store.getters.token,
  },
});
