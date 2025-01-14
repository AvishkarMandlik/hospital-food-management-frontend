import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_ENV === 'production' 
    ? 'https://hospital-food-management-backend-qyq0.onrender.com/api' 
    : 'http://localhost:5000/api', // Local development URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
