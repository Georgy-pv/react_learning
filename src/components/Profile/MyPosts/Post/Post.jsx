import React from 'react';
import style from './Post.module.css';  // импорт css в виде объекта, ключами которого являются классы

const Post = () =>{
    return (

        <div className={style.item}>
           <img src="https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg" alt=""/>
           <div className={style.text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consectetur explicabo delectus tenetur quasi animi aperiam fugiat expedita doloribus fugit, porro, magni dolor nostrum. Asperiores ab repellat atque laborum nemo?
           </div>
        </div>
                
    );
}

export default Post;