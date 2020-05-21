import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let state = store.getState();


let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App updateNewPostText={store.updateNewPostText.bind(store)} addPost={store.addPost.bind(store)} appState={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(state);

store.subs(rerenderTree);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
