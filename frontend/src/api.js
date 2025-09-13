import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

const getToken = () => localStorage.getItem('token');

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});