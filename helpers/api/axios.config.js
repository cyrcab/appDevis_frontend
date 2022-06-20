import axiosDefault from 'axios';
import { API_URL } from '@env';

const axios = axiosDefault.create({
  baseURL: 'http://192.168.1.16:5001',
});

export default axios;
