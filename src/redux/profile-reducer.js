import { usersAPI, profileAPI } from '../API/API';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    postsData: [
        {id: 1, message: "I think it's great!", likesCount: 35},
        {id: 2, message: "Hi! how are you?", likesCount: 27},
        {id: 3, message: "I'm gonna sleep, who with me?", likesCount: 27},
        {id: 4, message: "Today is sunny", likesCount: 27},
        {id: 5, message: "I think, I have wil great anything.", likesCount: 27},
        {id: 6, message: "Hi! how are you?", likesCount: 27},
        {id: 7, message: "It's my first postaret", likesCount: 58}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
        let newPostText = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id: state.postsData.length+1, message: newPostText, likesCount: 0} ]
            }

        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            } 

        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            } 

        case SET_STATUS:
            return{
                ...state,
                status: action.status
            } 
        default: 
            return state;
    }
}

export const addPostActionCreator =() =>{
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) =>{
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) =>{
    return {
        type: SET_STATUS,
        status
    }
}




export const getUserProfileTC = (userId) => {
    return (dispatch) => {
        usersAPI.profileDAL(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }     
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
        })
    }     
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
                
        })
    }     
}


export default profileReducer;