import React from 'react';
import classes from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
    return (
        <div className={classes.usersPage}>
            <Paginator totalItemsCount={props.totalUsersCount} 
                pageSize={props.pageSize} 
                currentPage={props.currentPage} 
                onPageChanged={props.onPageChanged} 
                portionSize = {10}/>
            {
                props.users.map(u => <User fetchFollowing={props.fetchFollowing}
                    user={u}
                    key={u.id}
                    followTC={props.followTC}
                    unFollowTC={props.unFollowTC}   />
                )
            }
        </div>
    );
}

export default Users;