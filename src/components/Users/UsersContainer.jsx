import React from 'react';
import { connect } from 'react-redux';
import { follow, 
        unFollow, 
        setUsers, 
        setCurrentPage, 
        setTotalUsersCount, 
        setIsFetching,
        toggleFetchFollowing } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsersDAL } from '../../API/API';

class UsersAPIComponent extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.setIsFetching(true);
        getUsersDAL(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
        
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        
        getUsersDAL(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {
        return <>
                {/* {this.props.isFetching ? 
                <div className={classes.usersPage} >
                    <Preloader />
                </div>
                : null} */}
                <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        isFetching={this.props.isFetching}
                        toggleFetchFollowing={this.props.toggleFetchFollowing}
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
    follow, unFollow,setUsers,setCurrentPage,
    setTotalUsersCount,setIsFetching, toggleFetchFollowing
})(UsersAPIComponent);  