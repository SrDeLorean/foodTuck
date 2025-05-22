import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.179/expo-admin/backend/public/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  //withCredentials: true,
});


export default api;