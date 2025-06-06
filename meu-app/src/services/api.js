import axios from 'axios';

const api = axios.create({
    baseURL: 'https://minha-api.com.br/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;