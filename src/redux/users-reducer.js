const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ... state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, subscription: true}
                    }
                    return u;
                })
            };
        
        case UNFOLLOW:
            return {
                ... state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, subscription: false}
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

        default: 
            return state;
    }
}

export const follwAC =(id) =>{
    return {
        type: FOLLOW,
        userId: id
    }
}

export const unfollowAC = (id) =>{
    return {
        type: UNFOLLOW,
        userId: id
    }
}
export const setUsersAC = (users) =>{
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (page) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}
export const setTotalUsersCountAC = (totalCount) =>{
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
}


export default usersReducer;