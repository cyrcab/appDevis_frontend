import axiosDefault from 'axios';
import { API_URL } from '@env';

const axios = axiosDefault.create({
  baseURL: 'https://app-devis-test.herokuapp.com/',
  withCredentials: true,
});

export default axios;
