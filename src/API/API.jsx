import * as axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '2b52991b-73ae-48c7-b55e-39dce8d4e14a'
    }
})


export let getUsersDAL = (currentPage, pageSize) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
}

export let followDAL = (userId) => {
    return axiosInstance.post(`follow/${userId}`)
}

export let unFollowDAL = (userId) => {
    return axiosInstance.delete(`follow/${userId}`)
}

export let profileDAL = (userId) => {
    return axiosInstance.get(`profile/${userId}`)
}

