import React from 'react';
import classes from './Users.module.css';
import userImg from '../../assads/image/user-lock.jpg'
import { NavLink } from 'react-router-dom';
import { followDAL, unFollowDAL } from '../../API/API';

const Users = (props) => {
     let pageCount = Math.ceil(props.totalUsersCount/ props.pageSize);
        
     let page = [];
        
    for(var i = 1; i < pageCount; i++){
            page.push(i);
    }

    window.props = props;

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
                            ? <button disabled={props.fetchFollowing.some(id=>id===u.id)} className={classes.btn} onClick={() => { 
                                props.toggleFetchFollowing(true, u.id);
                                unFollowDAL(u.id).then(response => {
                                    if(response.data.resultCode === 0){
                                        props.unFollow(u.id)
                                    }
                                    
                                    props.toggleFetchFollowing(false, u.id);
                                })
                            }}>Unsubscribe</button>
                            : <button disabled={props.fetchFollowing.some(id=>id===u.id)} className={classes.btn} onClick={() => {
                                props.toggleFetchFollowing(true, u.id);
                                followDAL(u.id).then(response => {
                                    if(response.data.resultCode === 0){
                                        debugger
                                        props.follow(u.id)
                                    }
                                    props.toggleFetchFollowing(false, u.id);
                                    console.log(props.fetchFollowing)
                                })
                            }}>Subscribe</button> }
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