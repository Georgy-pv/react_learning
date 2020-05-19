import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// Для Диалогов -  данные с сервера о именах, сообщениях-----------
let messagesData = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How is your ReacT!"},
    {id: 3, message: "You!"}
];


let dialogsData = [
    {id: 1, name: "John"},
    {id: 2, name: "Kate"},
    {id: 3, name: "Margaret"},
    {id: 4, name: "Ken"},
    {id: 5, name: "Buch"},
    {id: 6, name: "Jack"},
    {id: 7, name: "Rosa"}
];

 //---------------------------------------------------------------


 // Данные с сервера для MyPosts----------------------------------
 let postsData = [
    {id: 1, message: "I think it's great!", likesCount: 35},
    {id: 2, message: "Hi! how are you?", likesCount: 27},
    {id: 3, message: "I'm gonna sleep, who with me?", likesCount: 27},
    {id: 4, message: "Today is sunny", likesCount: 27},
    {id: 5, message: "I think, I have wil great anything.", likesCount: 27},
    {id: 6, message: "Hi! how are you?", likesCount: 27},
    {id: 7, message: "It's my first postaret", likesCount: 58}
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
