import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMassegeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        dialogsElements: state.dialogsPage.dialogsData.map((d) => {
            return <DialogItem key={d.id} name={d.name} id={d.id} />
        }),
        messagesElements: state.dialogsPage.messagesData.map((m) => {
            return <Message key={m.id} message={m.message} />
        }),
    }
    
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMassege: (newMessageText) => {
            let action = sendMassegeActionCreator(newMessageText);
            dispatch(action);
        },
        
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

