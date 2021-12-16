import { http } from './httpService';



export const getAllUserPacks = () => {
    return http.get("/order/get-order-pack-for-user")
}
