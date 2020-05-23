const SEND_MASSEGE = 'SEND-MASSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData:[
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your ReacT!"},
        {id: 3, message: "You!"}
    ],
    dialogsData: [
        {id: 1, name: "John"},
        {id: 2, name: "Kate"},
        {id: 3, name: "Margaret"},
        {id: 4, name: "Ken"},
        {id: 5, name: "Buch"},
        {id: 6, name: "Jack"},
        {id: 7, name: "Rosa"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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