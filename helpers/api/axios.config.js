import axiosDefault from 'axios';
import { API_URL } from '@env';

const axios = axiosDefault.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default axios;
