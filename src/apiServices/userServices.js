import { http } from './httpService';

export const profile = () => {
    return http.get("/profile")
}

export const editProfile = (data) => {
    return http.post("/user/edit", data )
}