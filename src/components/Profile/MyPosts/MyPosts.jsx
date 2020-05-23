import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Post from './Post/Post';

const MyPosts = (props) =>{
    //преобразование данных в jsx 
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div>
            <div className={classes.MyPosts}>
                My Posts
                <div className={classes.newPost}>
                    <div className="text">
                        <textarea ref={newPostElement} onChange={onPostChange} name="newPost" 
                                    id={classes.newPostTxt} value={props.profilePage.newPostText} />
                    </div>
                    <div>
                        <button onClick={onAddPost} className={classes.btn}>Add Post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {props.postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;