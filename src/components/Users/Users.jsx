import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assads/image/user-lock.jpg'

const Users = (props) => {
   
    if (props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }
    
    return (
        <div className={classes.usersPage}>
            {
                props.users.map(u => <div className={classes.userItem} key={u.id}>
                    <div>
                        <div className={classes.userImg} style={{ backgroundImage: u.photos.large != null ? `url(${u.photos.large})` : `url(${userImg})`}}>

                        </div>
                        {u.subscription 
                        ? <button className={classes.btn} onClick={()=>{props.unFollow(u.id)}}>Unsubscribe</button> 
                        : <button className={classes.btn} onClick={()=>{props.follow(u.id)}}>Subscribe</button>}
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