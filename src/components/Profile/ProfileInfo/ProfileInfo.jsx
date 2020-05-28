import React from 'react';
import classes from './ProfileInfo.module.css';  // импорт css в виде объекта, ключами которого являются классы
import Preloader from '../../common/Preloader/Preloader';
import userLock from '../../../assads/image/user-lock.jpg'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    

    return (
        <div className={classes.info}>
            <div className={classes.ava}>
                <img className={classes.img} src={props.profile.photos.large != null ? props.profile.photos.large : userLock} alt="" />
            </div>
            <div className={classes.description}>
                <span className={classes.name}>{props.profile.fullName}</span>
                <div className={classes.text}>
                    <div> 
                        My contacts: 
                        <span style={{display: 'block'}}>{props.profile.contacts.website}</span>
                        <span style={{display: 'block'}}>{props.profile.contacts.website}</span>
                        <span style={{display: 'block'}}>{props.profile.contacts.website}</span>
                        <span style={{display: 'block'}}>{props.profile.contacts.website}</span>
                    </div>
                    <div style={{marginTop: '10px'}} className="">
                        About Me: {props.profile.aboutMe}
                    </div>
                </div>
            </div>
            <div className="">
                Ищу работу: {props.profile.lookingForAJob=true ? 'Да' : 'Нет'}
                <span style={{display: 'block'}}>
                    Какую работу я ищу: {props.profile.lookingForAJobDescription}
                </span>
            </div>
        </div>
    );
}

export default ProfileInfo;