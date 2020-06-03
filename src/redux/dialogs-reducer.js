const SEND_MASSEGE = 'SEND-MASSAGE';


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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MASSEGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messagesData: [ ...state.messagesData, {id: state.messagesData.length+1, message: newMessage} ]
            };


        default:
            return state;
    }
}

export const sendMassegeActionCreator = (newMessageText) =>{
    return {
        type: SEND_MASSEGE,
        newMessageText
    }
}


export default dialogsReducer;