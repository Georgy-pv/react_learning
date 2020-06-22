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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.profileDAL(userId)
    }
}

export const profileAPI = {
    profileDAL(userId) {
        return axiosInstance.get(`profile/${userId}`)
    },
    getUserStatus(userId){
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status` ,{ status: status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return axiosInstance.put(`profile` , profile);
    }
}

export const authAPI = {
    me(){
        return axiosInstance.get(`auth/me`);
    },
    login(email, password, rememberMe=false, captcha=null){
        return axiosInstance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout(){
        return axiosInstance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return axiosInstance.get(`security/get-captcha-url`);
    }
}

