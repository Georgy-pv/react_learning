import React from 'react';
import style from './Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { reduxForm, Field } from 'redux-form';
import { FormControl } from '../common/formsControls/formsControls';
import { requireField, maxLengthCreator } from '../../utils/validators/validator';

const maxLength100 = maxLengthCreator(100)
const Textarea = FormControl('textarea')

const Dialogs = (props) =>{

    let addNewMessage = (values) =>{
        props.sendMassege(values.newMessageText);
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={style.messages}>
                {props.messagesElements}
                <div className="add_massege">
                   <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component={Textarea} 
            validate={[requireField, maxLength100]}
            name="newMessageText" 
            placeholder="Enter your message" />
            <button>Send M</button>
        </form>
    );
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddmessage'
})(AddMessageForm)

export default Dialogs;