// src/api/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});
