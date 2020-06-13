import { usersAPI, profileAPI } from '../API/API';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE_POST';


let initialState = {
    postsData: [
        { id: 1, message: "I think it's great!", likesCount: 35 },
        { id: 2, message: "Hi! how are you?", likesCount: 27 },
        { id: 3, message: "I'm gonna sleep, who with me?", likesCount: 27 },
        { id: 4, message: "Today is sunny", likesCount: 27 },
        { id: 5, message: "I think, I have wil great anything.", likesCount: 27 },
        { id: 6, message: "Hi! how are you?", likesCount: 27 },
        { id: 7, message: "It's my first postaret", likesCount: 58 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = action.newPostText;
            return {
                ...state,
                postsData: [...state.postsData, { id: state.postsData.length + 1, message: newPostText, likesCount: 0 }]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}




export const getUserProfileTC = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.profileDAL(userId)

        dispatch(setUserProfile(response.data));

    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}


export default profileReducer;