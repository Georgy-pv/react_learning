import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follwAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(follwAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)