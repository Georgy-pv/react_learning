import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App updateNewPostText={updateNewPostText} addPost={addPost} appState={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

