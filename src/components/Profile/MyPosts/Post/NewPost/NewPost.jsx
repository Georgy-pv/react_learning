import React from 'react';
import style from './NewPost.module.css';  // импорт css в виде объекта, ключами которого являются классы

const NewPost = (props) => {
    console.log(props)
    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
        <div>
            <div className="text">
                <textarea ref={newPostElement} name="newPost" id={style.newPostTxt}></textarea>
            </div>
            <div>
                <button onClick={addPost} className={style.btn}>Add Post</button>
            </div>
        </div>
    );
}

export default NewPost;