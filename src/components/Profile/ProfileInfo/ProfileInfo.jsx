import React from 'react';
import classes from './ProfileInfo.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Preloader from '../../common/Preloader/Preloader';
import userLock from '../../../assads/image/user-lock.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    let avatarStyle = {
        backgroundImage: `url(${profile.photos.large})`
    }

    return (
        <div className={classes.info}>
            <div className={classes.ava}>
                <div className={classes.img} style={{'background-image': `url(${profile.photos.large || userLock})`}} > </div>
                {/* <img className={classes.img} style={backgroundImage: } src={profile.photos.large || userLock} alt="" /> */}
                { isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
            </div>
            <div className={classes.description}>
                <span className={classes.name}>{profile.fullName}</span>
                <div className={classes.text}>
                    <div> 
                        My contacts: 
                        <span style={{display: 'block'}}>{profile.contacts.website}</span>
                        <span style={{display: 'block'}}>{profile.contacts.website}</span>
                        <span style={{display: 'block'}}>{profile.contacts.website}</span>
                        <span style={{display: 'block'}}>{profile.contacts.website}</span>
                    </div>
                    <div>
                        About Me: {profile.aboutMe}
                    </div>
                    <div style={{marginTop: '10px'}} className="">
                        Status
                        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                    </div>
                </div>
            </div>
            <div className="">
                Ищу работу: {profile.lookingForAJob=true ? 'Да' : 'Нет'}
                <span style={{display: 'block'}}>
                    Какую работу я ищу: {profile.lookingForAJobDescription}
                </span>
            </div>
        </div>
    );
}

export default ProfileInfo;