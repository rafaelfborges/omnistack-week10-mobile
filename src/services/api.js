import axios from 'axios';
import { API_URL_CONNECTION } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL_CONNECTION
});

export default api;
