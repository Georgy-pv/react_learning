import React from 'react';
import classes from './Users.module.css';
import userImg from '../../assads/image/user-lock.jpg'

const Users = (props) => {
     let pageCount = Math.ceil(props.totalUsersCount/ props.pageSize);
        let page = [];
        for(var i = 1; i < pageCount; i++){
            page.push(i);
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
                        <div className={classes.userImg} style={{ backgroundImage: u.photos.large != null ? `url(${u.photos.large})` : `url(${userImg})` }}>

                        </div>
                        {u.subscription
                            ? <button className={classes.btn} onClick={() => {props.unFollow(u.id) }}>Unsubscribe</button>
                            : <button className={classes.btn} onClick={() => {props.follow(u.id) }}>Subscribe</button>}
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