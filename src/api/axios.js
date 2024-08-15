import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/' // replace with your actual API URL
});

export default instance