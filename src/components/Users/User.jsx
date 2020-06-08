import React from 'react';
import classes from './Users.module.css';
import userImg from '../../assads/image/user-lock.jpg'
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let u = props.user;
    return (
        <div className={classes.userItem} key={u.id}>
            <div>
                <NavLink to={`/profile/${u.id}`}>
                    <div className={classes.userImg}
                        style={{
                            backgroundImage: u.photos.large != null ?
                                `url(${u.photos.large})` : `url(${userImg})`
                        }}></div>
                </NavLink>
                {u.followed
                    ? <button disabled={props.fetchFollowing.some(id => id === u.id)} className={classes.btn} onClick={() => {
                        props.unFollowTC(u.id)
                    }}>Unsubscribe</button>
                    : <button disabled={props.fetchFollowing.some(id => id === u.id)} className={classes.btn} onClick={() => {
                        props.followTC(u.id)
                    }}>Subscribe</button>}
            </div>

            <div className={classes.userInfo}>
                <div className={classes.userName}>
                    {u.name}
                </div>
                <div className={classes.userStatus}>
                    {u.status}
                </div>
            </div>
            <div className={classes.userLocation}>
                <span> {"u.location.country"}, </span>
                <span> {"u.location.city"} </span>
            </div>

        </div>
    );
}

export default User;