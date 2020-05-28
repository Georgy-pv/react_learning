import React from 'react';
import { connect } from 'react-redux';
import { follow, 
        unFollow, 
        setUsers, 
        setCurrentPage, 
        setTotalUsersCount, 
        setIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import classes from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../API/API';

class UsersAPIComponent extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.setIsFetching(true);
        
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
        
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        })
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
    follow, unFollow,setUsers,setCurrentPage,setTotalUsersCount,setIsFetching 
})(UsersAPIComponent);  