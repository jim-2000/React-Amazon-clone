import axios from 'axios';

const instance = axios.create({
    baseURL: '.....' // the api url is This 
})

export default instance;