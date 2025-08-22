import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', 
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer dummy-token' // Example header
  }
});

export default api;