import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.18.74:3333'
});

export default api;