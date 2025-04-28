import axios from 'axios'

let subdomain = ''

if (typeof window !== 'undefined') {
  const hostname = window.location.hostname // zayca.test
  const parts = hostname.split('.')
  if (parts.length === 2) {
    subdomain = parts[0] // solo 'zayca'
  }
}

const axiosInstance = axios.create({
  baseURL: `http://${subdomain}.test:8080`,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default axiosInstance
