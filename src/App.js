import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Message from './components/Dialogs/Message/Message';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';




const App = () => {
     // данные с сервера о именах, сообщениях
    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your ReacT!"},
        {id: 3, message: "You!"}
    ];

    let messagesElements = messagesData.map((m) => {
        return <Message message={m.message} />
    });
    let dialogsData = [
        {id: 1, name: "John"},
        {id: 2, name: "Kate"},
        {id: 3, name: "Margaret"},
        {id: 4, name: "Ken"},
        {id: 5, name: "Buch"},
        {id: 6, name: "Jack"},
        {id: 7, name: "Rosa"}
    ];
    

        // получение JSX элемента из данных с сервера
    let dialogsElements = dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id} />
    })
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper__content">
                    <Route path="/profile" component={Profile} />
                    <Dialogs dialogsElements={dialogsElements} messagesElements={messagesElements}/>
                    <Route path="/feed" component={Feed} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>

            </div>
        </BrowserRouter>
    );
}



export default App;
