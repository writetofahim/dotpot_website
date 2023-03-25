import axios from 'axios';

const token = localStorage.getItem("accessToken");
const instance = axios.create({
  baseURL: 'http://localhost:8800/api',
  headers:{'Authorization': `Bearer ${JSON.parse(token)}`},
});

export default instance;