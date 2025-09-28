import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // your backend URL
});

export const loginUser = (credentials) => API.post('/auth/login', credentials);
