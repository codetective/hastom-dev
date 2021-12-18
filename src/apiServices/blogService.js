import { http } from './httpService';

export const getBlogByID = (id) => {
    return http.get(`/article/${id}`)
}