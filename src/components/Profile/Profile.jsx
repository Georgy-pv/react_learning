import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';  // импорт css в виде объекта, ключами которого являются классы
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) =>{
    return (
        <div>
            <div className={classes.head}></div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
            {/* <MyPosts dispatch={props.dispatch} 
                    newPostText={props.profilePage.newPostText} 
                    postsData={props.profilePage.postsData} /> */}
        </div>
    );
}

export default Profile;