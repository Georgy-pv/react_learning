import React from 'react';
import style from './Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { Redirect } from 'react-router-dom';

const Dialogs = (props) =>{
    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.messageChange(text);
    }

    let onSendMessage = () => {
        props.sendMassege();
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {/* отрисовка */}
                {props.dialogsElements}
            </div>
            <div className={style.messages}>
                {/* отрисовка */}
                {props.messagesElements}
                <div className="add_massege">
                    <textarea ref={newMessageElement} onChange={onMessageChange}
                        value={props.dialogsPage.newMessageText} />
                    <button onClick={onSendMessage}>Send M</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;