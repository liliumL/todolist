import axios from 'axios'
const service = axios.create({
  baseURL: 'http://127.0.0.1:8001',
  timeout: 5000,
  withCredentials: false
})

export default service
