import * as serviceWorker from './serviceWorker';
import state, { subs } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';

let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App updateNewPostText={updateNewPostText} addPost={addPost} appState={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(state);

subs(rerenderTree);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
