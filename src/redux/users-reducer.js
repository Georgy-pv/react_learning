import { usersAPI } from '../API/API';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_FETCH_FOLLOWING = 'users/TOGGLE-FETCH-FOLLOWING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    fetchFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ... state, 
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId){
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            };
        
        case UNFOLLOW:
            return {
                ... state, 
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId){
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
            };

        case SET_USERS:
            return { 
                ...state, 
                users: [...action.users]
            };

        case SET_CURRENT_PAGE:
            return { 
                ...state, 
                currentPage: action.currentPage
            };

        case SET_TOTAL_USERS_COUNT:
            return { 
                ...state, 
                totalUsersCount: action.totalCount
            };

        case TOGGLE_IS_FETCHING:
            return { 
                ...state, 
                isFetching: action.isFetching
            };

        case TOGGLE_FETCH_FOLLOWING:
            return { 
                ...state, 
                fetchFollowing: action.isFetching ? [...state.fetchFollowing, action.userId] : state.fetchFollowing.filter(id=> id != action.userId)
            };

        default: 
            return state;
    }
}

export const followSuccess =(id) =>{
    return {
        type: FOLLOW,
        userId: id
    }
}

export const unFollowSuccess = (id) =>{
    return {
        type: UNFOLLOW,
        userId: id
    }
}
export const setUsers = (users) =>{
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (page) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}
export const setTotalUsersCount = (totalCount) =>{
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}
export const setIsFetching = (isFetching) =>{
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const toggleFetchFollowing = (isFetching, userId) =>{
    return {
        type: TOGGLE_FETCH_FOLLOWING,
        isFetching: isFetching,
        userId: userId
    }
}






export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsersDAL(page, pageSize);

        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }      
} 


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFetchFollowing(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFetchFollowing(false, userId));
}


export const unFollowTC = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollowDAL.bind(usersAPI), unFollowSuccess);
    }     
} 


export const followTC = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followDAL.bind(usersAPI), followSuccess);
    }     
} 

 



export default usersReducer;