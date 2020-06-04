import React from 'react';
import Profile from './Profile';
import {getUserProfileTC, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.authUserId;
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatus(userId)
    }
    
    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} 
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus} />
        );
    }
}






let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId:state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfileTC,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)








