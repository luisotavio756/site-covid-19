const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:8000'
});

export default api;