import React from 'react';
import style from './NewPost.module.css';  // импорт css в виде объекта, ключами которого являются классы
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/state';




const NewPost = (props) => {
    let newPostElement = React.createRef();

    
    let addPost = () =>{
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div>
            <div className="text">
                <textarea ref={newPostElement} onChange={onPostChange} name="newPost" id={style.newPostTxt} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost} className={style.btn}>Add Post</button>
            </div>
        </div>
    );
}

export default NewPost;