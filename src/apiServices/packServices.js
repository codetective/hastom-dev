import { http } from './httpService';

export const createOrderPack = (data) => {
    return http.post("/order/create", data)
}

export const getAllUserPacks = () => {
    return http.get("/order/get-order-pack-for-user")
}

export const getOrderById = (id) => {
    return http.get(`/order/get-order-pack-by-item-id/${id}`)
}