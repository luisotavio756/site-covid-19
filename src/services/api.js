const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api-coronainfo.herokuapp.com'
    // baseURL: 'http://localhost:3333'
});

export default api;