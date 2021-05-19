import axios from 'axios'

const useApi = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
})

export default useApi
