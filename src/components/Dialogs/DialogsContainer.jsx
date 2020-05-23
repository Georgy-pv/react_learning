import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMassegeActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    // получение JSX элемента из данных с сервера
    let messagesElements = dialogsPage.messagesData.map((m) => {
        return <Message key={m.id} message={m.message} />
    });

    let dialogsElements = dialogsPage.dialogsData.map((d) => {
        return <DialogItem key={d.id} name={d.name} id={d.id} />
    });

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    let sendMessage = () => {
        let action = sendMassegeActionCreator();
        props.store.dispatch(action);
    }

    

    return <Dialogs messageChange={onMessageChange} sendMassege={sendMessage} 
                    messagesElements={messagesElements} dialogsElements={dialogsElements} dialogsPage={dialogsPage}/>
}

export default DialogsContainer;