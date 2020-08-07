import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.105:3333',
  headers: {
    'Authorization': `Bearer `,
    'Content-Type': 'application/json'
  }
})

export default api;