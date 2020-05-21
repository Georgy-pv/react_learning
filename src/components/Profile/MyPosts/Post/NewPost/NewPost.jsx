import React from 'react';
import style from './NewPost.module.css';  // импорт css в виде объекта, ключами которого являются классы

const NewPost = (props) => {
    console.log(props)
    let newPostElement = React.createRef();

    let addPost = () =>{
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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