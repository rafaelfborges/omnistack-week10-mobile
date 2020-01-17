import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shielded-stream-52936.herokuapp.com'
});

export default api;
