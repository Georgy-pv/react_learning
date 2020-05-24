import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMassegeActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let dialogsPage = store.getState().dialogsPage;

//                 // получение JSX элемента из данных с сервера
//                 let messagesElements = dialogsPage.messagesData.map((m) => {
//                     return <Message key={m.id} message={m.message} />
//                 });

//                 let dialogsElements = dialogsPage.dialogsData.map((d) => {
//                     return <DialogItem key={d.id} name={d.name} id={d.id} />
//                 });

//                 let onMessageChange = (text) => {
//                     let action = updateNewMessageTextActionCreator(text);
//                     store.dispatch(action);
//                 }

//                 let sendMessage = () => {
//                     let action = sendMassegeActionCreator();
//                     store.dispatch(action);
//                 }
//                 return <Dialogs messageChange={onMessageChange}
//                     sendMassege={sendMessage}
//                     messagesElements={messagesElements}
//                     dialogsElements={dialogsElements}
//                     dialogsPage={dialogsPage} />
//             }
//         }
//         </StoreContext.Consumer>

//     );
// }

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        dialogsElements: state.dialogsPage.dialogsData.map((d) => {
            return <DialogItem key={d.id} name={d.name} id={d.id} />
        }),
        messagesElements: state.dialogsPage.messagesData.map((m) => {
            return <Message key={m.id} message={m.message} />
        })  
    }
    
};

let mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (text) => { 
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        sendMassege: () => {
            let action = sendMassegeActionCreator();
            dispatch(action);
        },
        
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;