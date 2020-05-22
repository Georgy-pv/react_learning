import React from 'react';
import style from './Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMassegeActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {
    const newMessageElement = React.createRef();

    // получение JSX элемента из данных с сервера
    let messagesElements = props.dialogsPage.messagesData.map((m) => {
        return <Message key={m.id} message={m.message} />
    });

    let dialogsElements = props.dialogsPage.dialogsData.map((d) => {
        return <DialogItem key={d.id} name={d.name} id={d.id} />
    });

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    let sendMessage = () => {
        let action = sendMassegeActionCreator();
        props.dispatch(action);
    }

    

    return (

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {/* отрисовка */}
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {/* отрисовка */}
                {messagesElements}
                <div className="add_massege">
                    <textarea ref={newMessageElement} onChange={onMessageChange}
                        value={props.dialogsPage.newMessageText} />
                    <button onClick={sendMessage}>Send M</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;