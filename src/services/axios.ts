import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // or your API URL
  withCredentials: true, // send cookies
});

export default axiosInstance;