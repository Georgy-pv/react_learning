const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

        case TOGGLE_IS_FETCHING:
            return { 
                ...state, 
                isFetching: action.isFetching
            };

        default: 
            return state;
    }
}

export const follow =(id) =>{
    return {
        type: FOLLOW,
        userId: id
    }
}

export const unFollow = (id) =>{
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


export default usersReducer;