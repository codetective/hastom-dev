import { http } from './httpService';
import axios from 'axios'

export const login = (data) => {
    return http.post("/signin", data)
}

export const register = (data) => {
    return http.post("/create-account", data)
}

// export const forgotPassword = (data) => {
//     return http.post("/forgot-password", data)
// }

export const logout = () => {
    return http.post("/sign-out")
}

export const cookie = () => {
    return axios.get("https://farmlandnigeria.com/sanctum/csrf-cookie")
}