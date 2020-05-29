import React from 'react';
import { connect } from 'react-redux';
import classes from './Users.module.css';
import { followSuccess, 
        unFollowSuccess, 
        setCurrentPage,
        toggleFetchFollowing,
        getUsers,
        followTC,
        unFollowTC } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
                {this.props.isFetching ? 
                <div className={classes.usersPage} >
                    <Preloader />
                </div>
                : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        isFetching={this.props.isFetching}
                        fetchFollowing={this.props.fetchFollowing} />
                </>
    }
}



let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        fetchFollowing: state.usersPage.fetchFollowing
    }
};


export const UsersContainer = connect( mapStateToProps, {
    followSuccess, unFollowSuccess,setCurrentPage, toggleFetchFollowing,
    getUsers, followTC, unFollowTC
})(UsersAPIComponent);  