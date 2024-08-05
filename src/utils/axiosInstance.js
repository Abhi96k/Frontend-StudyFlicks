
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-studyflick.onrender.com', // Your base URL here
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
