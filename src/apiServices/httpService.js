import axios from 'axios';
import baseURL from '../helpers/config';


export const http = axios.create({
    baseURL: baseURL,
    timeout: 100000,
    withCredentials: true,
    headers: {
        'Accept': 'apllication/json',
        'Authorization': `Bearer `,
        'Access-Control-Allow-Origin': '*',
    }
})