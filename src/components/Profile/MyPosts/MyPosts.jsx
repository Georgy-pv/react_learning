import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.addPost();
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