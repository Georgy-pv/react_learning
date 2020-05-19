import React from 'react';
import style from './Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы



const Dialogs = (props) => {
       

    return (
        <div>
            <div className={style.dialogs}>

                <div className={style.dialogsItems}> 
                        {/* отрисовка */}
                    {props.dialogsElements}
                </div>

                <div className={style.messages}>
                    {/* отрисовка */}
                    {props.messagesElements}
                </div>
            </div>

        </div>
    );
}

export default Dialogs;