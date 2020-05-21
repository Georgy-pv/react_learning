import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Post from './Post/Post';
import NewPost from './Post/NewPost/NewPost';

const MyPosts = (props) =>{
    //преобразование данных в jsx 
let postsElements = props.postsData.map((p) => {
    return <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
}) 

    return (
        <div>
            <div className={classes.MyPosts}>
                My Posts
                <div className={classes.newPost}>
                    <NewPost updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} addPost={props.addPost}/>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;