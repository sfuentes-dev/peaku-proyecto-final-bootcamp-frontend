import axios from 'axios'

const trabookApi = axios.create({
  baseURL: 'http://localhost:4000'
})

export default trabookApi
