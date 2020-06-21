import React from 'react';
import classes from './ProfileInfo.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Preloader from '../../common/Preloader/Preloader';
import userLock from '../../../assads/image/user-lock.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto, saveProfile }) => {
    
    let [editMode, setEditMode] = useState(false)
    
    if (!profile) {
        return <Preloader />
    }


    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
                setEditMode(false)
        })
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={classes.info}>
            <div className={classes.ava}>
                <div className={classes.img} style={{ backgroundImage: `url(${profile.photos.large || userLock})` }} > </div>
                {/* <img className={classes.img} style={backgroundImage: } src={profile.photos.large || userLock} alt="" /> */}
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                {isOwner && <button onClick={() => setEditMode(true)} >Edit Profile</button>}
            </div>
            {editMode ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> 
            :<ProfileData profile={profile} status={status} updateUserStatus={updateUserStatus} /> }
            
        </div>
    );
}




const ProfileData = ({ profile, status, updateUserStatus }) => {
    return (<>
    
        <div className={classes.description}>
            <span className={classes.name}>{profile.fullName}</span>
            <div className={classes.text}>
                <div>
                    My contacts:
                        {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}

                </div>
                <div>
                    About Me: {profile.aboutMe}
                </div>
                <div style={{ marginTop: '10px' }} className="">
                    Status
                        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                </div>
            </div>
        </div>
        <div>
            Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}
            {profile.lookingForAJob &&
                <span style={{ display: 'block' }}>
                    My professional skills: {profile.lookingForAJobDescription}
                </span>}
        </div>
    </>
    );
}


const Contacts = ({ contactTitle, contactValue }) => {
    return <div>
        <span style={{ display: 'block' }}> {contactTitle}: {contactValue} </span>
    </div>
}

export default ProfileInfo;