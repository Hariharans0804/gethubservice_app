import axios from 'axios';
import { API_HOST } from '@env';

// Create a reusable axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_HOST,
  timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here if needed
  },
});


// Add response interceptor for global error handling
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    let customError = error;
    if (error.response) {
      // Server responded with a status other than 2xx
      customError = {
        ...error,
        message: error.response.data?.message || `Request failed with status ${error.response.status}`,
        status: error.response.status,
        data: error.response.data,
      };
      console.error('API Error:', customError);
    } else if (error.request) {
      // Request was made but no response received
      customError = {
        ...error,
        message: 'No response received from server. Please check your network connection.',
      };
      console.error('Network Error:', customError);
    } else {
      // Something else happened
      customError = {
        ...error,
        message: error.message || 'An unknown error occurred.',
      };
      console.error('Unknown Error:', customError);
    }
    return Promise.reject(customError);
  }
);

export default axiosInstance;
