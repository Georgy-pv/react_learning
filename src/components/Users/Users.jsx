import React from 'react';
import classes from './Users.module.css';
import userImg from '../../assads/image/user-lock.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { followDAL, unFollowDAL } from '../../API/API';

const Users = (props) => {
     let pageCount = Math.ceil(props.totalUsersCount/ props.pageSize);
        let page = [];
        for(var i = 1; i < pageCount; i++){
            page.push(i);
        }
        
    let onFollow = (userId) => {
        followDAL(userId).then(response => {
            if(response.data.resultCode === 0){
                props.follow(userId)
            }
        })
    }
        
    let onUnFollow = (userId) => {
        unFollowDAL(userId).then(response => {
            if(response.data.resultCode === 0){
                props.unFollow(userId)
            }
        })
    }

    return (
        <div className={classes.usersPage}>
            <div>
                {page.map(p => {
                    return <span className={`${classes.page} ${props.currentPage === p && classes.selectedPage}`}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div className={classes.userItem} key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}> 
                            <div className={classes.userImg} 
                            style={{ backgroundImage: u.photos.large != null ? 
                            `url(${u.photos.large})` : `url(${userImg})` }}></div>
                        </NavLink>
                        { u.followed
                            ? <button className={classes.btn} onClick={() => { onUnFollow(u.id) }}>Unsubscribe</button>
                            : <button className={classes.btn} onClick={() => { onFollow(u.id) }}>Subscribe</button> }
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

                </div>)
            }
        </div>
    );
}

export default Users;