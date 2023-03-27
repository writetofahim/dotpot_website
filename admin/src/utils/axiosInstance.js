import axios from 'axios';

const token = localStorage.getItem("accessToken");
const instance = axios.create({
  baseURL: 'http://dotpotit.com/api',
  headers:{'Authorization': `Bearer ${JSON.parse(token)}`},
});

export default instance;