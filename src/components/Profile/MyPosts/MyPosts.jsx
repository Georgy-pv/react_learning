import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Post from './Post/Post';

const MyPosts = () =>{
    return (
        <div>
            <div>
                My Posts
                <div>
                New Post
                </div>
                <div className={classes.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;