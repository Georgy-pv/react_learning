import React from 'react';
import style from './../Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы



const Message = (props) =>{
    return <div className={style.message}>{props.message}</div>
}


export default Message;