import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';  // импорт css в виде объекта, ключами которого являются классы
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) =>{
    return (
        <div>
            <div className={classes.head}></div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} />
        </div>
    );
}

export default Profile;