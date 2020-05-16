import React from 'react';
import style from './Post.module.css';  // импорт css в виде объекта, ключами которого являются классы

const Post = (props) => {
    return (
        <div className={style.post__wrap}>
            <div className={style.item}>
                <img src="https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg" alt="" />
                <div className={style.text}>
                    {props.message} 
                </div>
                <span>like: {props.like} </span>
            </div>
        </div>

    );
}

export default Post;