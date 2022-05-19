/* eslint-disable*/
import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'https://my-plants-app.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token'));
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;
