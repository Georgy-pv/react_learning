const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
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

export default usersReducer;