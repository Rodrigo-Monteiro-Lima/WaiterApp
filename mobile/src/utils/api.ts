import axios from 'axios';

export const baseURL = 'http://192.168.1.7:3001';

export const api = axios.create({
  baseURL,
});
