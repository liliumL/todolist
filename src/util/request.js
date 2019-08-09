import axios from 'axios'
const service = axios.create({
  baseURL: 'http://94.191.87.159:8080/lilium/',
  timeout: 5000,
  withCredentials: false
})

export default service
