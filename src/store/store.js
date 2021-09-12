import { createState } from '@hookstate/core';

const store = createState({
    user: [],
    alertNotification: false,
    alertMessage: '',
    alertType: '',
    isLoggedIn: false

})

export default store;