import React from 'react';
import style from './Dialogs.module.css';  // импорт css в виде объекта, ключами которого являются классы


class Dialogs extends React.Component {
    constructor(props) {
        super(props);
        this.newMessageElement = React.createRef();
        this.onMessageChange = () => {
            let text = this.newMessageElement.current.value;
            this.props.messageChange(text);
        }
        this.onSendMessage = () => {
            this.props.sendMassege();
        }
    }
    render(){
        return (
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {/* отрисовка */}
                    {this.props.dialogsElements}
                </div>
                <div className={style.messages}>
                    {/* отрисовка */}
                    {this.props.messagesElements}
                    <div className="add_massege">
                        <textarea ref={this.newMessageElement} onChange={this.onMessageChange}
                            value={this.props.dialogsPage.newMessageText} />
                        <button onClick={this.onSendMessage}>Send M</button>
                    </div>
                </div>
            </div>
        );
    }
}

// const Dialogs = (props) => {
//     const newMessageElement = React.createRef();

//     // получение JSX элемента из данных с сервера
    
//     let onMessageChange = () => {
//         let text = newMessageElement.current.value;
//         props.messageChange(text);
//     }

//     let onSendMessage = () => {
//         props.sendMassege();
//     }

    

//     return (

//         <div className={style.dialogs}>
//             <div className={style.dialogsItems}>
//                 {/* отрисовка */}
//                 {props.dialogsElements}
//             </div>
//             <div className={style.messages}>
//                 {/* отрисовка */}
//                 {props.messagesElements}
//                 <div className="add_massege">
//                     <textarea ref={newMessageElement} onChange={onMessageChange}
//                         value={props.dialogsPage.newMessageText} />
//                     <button onClick={onSendMessage}>Send M</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Dialogs;