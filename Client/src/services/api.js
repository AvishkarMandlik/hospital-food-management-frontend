import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://hospital-food-management-59px.onrender.com/api' 
    : 'http://localhost:5000/api', // Local development URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
