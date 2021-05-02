import axios from 'axios'

const _fetchApi = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
})

export default _fetchApi
