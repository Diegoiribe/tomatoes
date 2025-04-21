import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.tudominio.com', // cámbialo a tu URL base
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos de espera
});

export default axiosInstance;