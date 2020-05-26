import React from 'react';
import classes from './Profile.module.css';  // импорт css в виде объекта, ключами которого являются классы
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () =>{
    return (
        <div>
            <div className={classes.head}></div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;