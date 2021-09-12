import axios from 'axios';
import baseURL from '../helpers/config';


const token = localStorage.getItem("token");

export const http = axios.create({
    baseURL: baseURL,
    timeout: 100000,
    withCredentials: true,
    headers: {
        'Accept': 'apllication/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    }
})