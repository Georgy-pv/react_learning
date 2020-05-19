import React from 'react';
import classes from './MyPosts.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Post from './Post/Post';

const MyPosts = () =>{

    let postsData = [
        {id: 1, message: "I think it's great!", likesCount: 35},
        {id: 2, message: "Hi! how are you?", likesCount: 27},
        {id: 3, message: "I'm gonna sleep, who with me?", likesCount: 27},
        {id: 4, message: "Today is sunny", likesCount: 27},
        {id: 5, message: "I think, I have wil great anything.", likesCount: 27},
        {id: 6, message: "Hi! how are you?", likesCount: 27},
        {id: 7, message: "It's my first postaret", likesCount: 58}
    ];

    let postsElements = postsData.map((p) => {
        return  <Post message={p.message} likesCount={p.likesCount}/>
    })

    return (
        <div>
            <div className={classes.MyPosts}>
                My Posts
                <div>
                New Post
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;