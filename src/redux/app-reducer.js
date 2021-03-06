import { authMe } from "./auth-reducer";

const SET_INITIALIZED = 'app/SET-INITIALIZED';



let initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZED:
            return{
                ...state,
                initialized: true
            } 
        default: 
            return state;
    }
    
}

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess());
    })
    
}


export default appReducer;