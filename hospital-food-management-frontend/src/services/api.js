import axios from 'axios';

// Create an Axios instance to interact with the backend API
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Make sure the backend is running on this URL
  // baseURL: 'https://hospital-food-management-backend-itv7.onrender.com', // Make sure the backend is running on this URL
  headers: {
    'Content-Type': 'application/json',
  },
  
});

export default api;
