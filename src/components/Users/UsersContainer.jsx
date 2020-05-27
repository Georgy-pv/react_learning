import React from 'react';
import { connect } from 'react-redux';
import { follow, 
        unfollow, 
        setUsers, 
        setCurrentPage, 
        setTotalUsersCount, 
        setIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import classes from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
       console.log(this.props.isFetching)
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
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        isFetching={this.props.isFetching} />
                </>
    }
}



let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow,setUsers,setCurrentPage,setTotalUsersCount,setIsFetching 
})(UsersAPIComponent);  