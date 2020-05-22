const SEND_MASSEGE = 'SEND-MASSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case SEND_MASSEGE:
            let newMessage = {id: state.messagesData.length+1, 
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMassegeActionCreator = () =>{
    return {
        type: SEND_MASSEGE
    }
}

export const updateNewMessageTextActionCreator = (message) =>{
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message
    }
}


export default dialogsReducer;