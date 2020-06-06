import React from 'react';
import { connect } from 'react-redux';
import classes from './Users.module.css';
import {followSuccess, 
        unFollowSuccess, 
        setCurrentPage,
        toggleFetchFollowing,
        getUsers,
        followTC,
        unFollowTC } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getPageSize, 
        getTotalUsersCount,
        getCurrentPage, 
        getFetching,
        getFetchFollowing, 
        getUsersState} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    
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
        console.log('render')
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
                        fetchFollowing={this.props.fetchFollowing}
                        followTC={this.props.followTC}
                        unFollowTC={this.props.unFollowTC} />
                </>
    }
}



// let mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         fetchFollowing: state.usersPage.fetchFollowing
//     }
// };


let mapStateToProps = (state) => {
    console.log('mapStateToProps')
    return{
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        fetchFollowing: getFetchFollowing(state)
    }
};

export default compose(
    connect( mapStateToProps, {
        followSuccess, unFollowSuccess,setCurrentPage, toggleFetchFollowing,
        getUsers, followTC, unFollowTC
    }),
    withAuthRedirect
)(UsersContainer)