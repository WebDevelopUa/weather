import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

instance.interceptors.request.use(config => {
    config.params = {
        q: 'кингстон',
        units: 'metric',
        appid: '39abfd6ed55b4e52a6de04ae6c0b1296',
        ...config.params
    }
    return config
});

export default instance;

