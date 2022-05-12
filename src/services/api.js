/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-plants-app.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('@myPlants:token'));
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;
