const axios = require("axios");

const api = axios.create({
    baseURL: "Your-API-Covid-data",
});

export default api;
