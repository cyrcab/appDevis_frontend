import axiosDefault from 'axios';
import { API_URL } from '@env';

const axios = axiosDefault.create({
  // baseURL: 'http://172.20.10.2:5001',
  baseURL: API_URL,
});

export default axios;
