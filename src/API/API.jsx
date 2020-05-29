import * as axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '2b52991b-73ae-48c7-b55e-39dce8d4e14a'
    }
});

export const usersAPI = {
    getUsersDAL(currentPage, pageSize){
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
    },
    followDAL(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },
    unFollowDAL(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    },
    profileDAL(userId) {
        return axiosInstance.get(`profile/${userId}`)
    },
    headerDAL(){
        return axiosInstance.get(`auth/me`)
        
    }

}

