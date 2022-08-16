import axiosDefault from 'axios';
import { API_URL } from '@env';

const axios = axiosDefault.create({
  baseURL: 'http://172.20.10.2:5001',
  withCredentials: true,
  // baseURL: 'http://192.168.1.16:5001',
});

export default axios;
