const axios = require("axios");

const api = axios.create({
    baseURL: "http://api-coronainfo.herokuapp.com",
});

export default api;
