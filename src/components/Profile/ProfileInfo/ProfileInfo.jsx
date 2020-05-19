import React from 'react';
import classes from './ProfileInfo.module.css';  // импорт css в виде объекта, ключами которого являются классы

const ProfileInfo = (props) => {
    return (
        <div className={classes.info}>
            <div className={classes.ava}>
                <img className={classes.img} src="https://gamehag.com/static/avatar/3026582_max.jpg" alt="" />
            </div>
            <div className={classes.description}>
                <span className={classes.name}>John Wick</span>
                <span className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae mollitia a reiciendis consequatur possimus at repudiandae quos rerum cum accusamus quidem qui aspernatur numquam adipisci nulla labore, tenetur odit!</span>
            </div>
        </div>
    );
}

export default ProfileInfo;