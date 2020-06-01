import React from 'react';
import classes from './Profile.module.css';  // импорт css в виде объекта, ключами которого являются классы
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) =>{
    return (
        <div>
            <div className={classes.head}></div>
            <ProfileInfo profile={props.profile} status={props.status}
                updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;