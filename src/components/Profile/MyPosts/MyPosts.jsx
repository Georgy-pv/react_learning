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
                    <Post message="I think it's great!" like="35"/>
                    <Post message="Hi! how are you?" like="27"/>
                    <Post message="It's my first post" like="58"/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;