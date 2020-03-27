const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api-coronainfo.herokuapp.com'
});

export default api;