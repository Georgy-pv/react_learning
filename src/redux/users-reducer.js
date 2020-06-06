import { usersAPI } from '../API/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FETCH_FOLLOWING = 'TOGGLE-FETCH-FOLLOWING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    fetchFollowing: [],
    fake: 10
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FAKE': return {...state, fake: +1}
        case FOLLOW:
            return {
                ... state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        
        case UNFOLLOW:
            return {
                ... state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
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
    return (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsersDAL(page, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }      
} 


export const unFollowTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetchFollowing(true, userId));
        usersAPI.unFollowDAL(userId).then(response => {
            if (response.data.resultCode === 0) {
               dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFetchFollowing(false, userId));
        })
    }     
} 


export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetchFollowing(true, userId));
        usersAPI.followDAL(userId).then(response => {
            if (response.data.resultCode === 0) {
               dispatch(followSuccess(userId))
            }
            dispatch(toggleFetchFollowing(false, userId));
        })
    }     
} 

 



export default usersReducer;