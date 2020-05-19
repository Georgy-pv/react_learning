import React from 'react';
import style from './Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
        // получение JSX элемента из данных с сервера
    let messagesElements = props.messagesData.map((m) => {
        return <Message message={m.message} />
    });

    let dialogsElements = props.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id} />
    });

    return (
        <div>
            <div className={style.dialogs}>

                <div className={style.dialogsItems}> 
                        {/* отрисовка */}
                    {dialogsElements}
                </div>

                <div className={style.messages}>
                    {/* отрисовка */}
                    {messagesElements}
                </div>
            </div>

        </div>
    );
}

export default Dialogs;