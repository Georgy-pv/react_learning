import React from 'react';
import classes from './ProfileInfo.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Preloader from '../../common/Preloader/Preloader';
import userLock from '../../../assads/image/user-lock.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile){
        return <Preloader/>
    }

    return (
        <div className={classes.info}>
            <div className={classes.ava}>
                <img className={classes.img} src={profile.photos.large != null ? profile.photos.large : userLock} alt="" />
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