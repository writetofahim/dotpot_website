import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dotpotit.com/api',
});

export default instance;