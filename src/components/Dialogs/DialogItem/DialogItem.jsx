import React from 'react';
import style from './../Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div >
           <NavLink activeClassName={style.active} className={style.dialog} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;