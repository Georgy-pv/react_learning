import React from 'react';
import Profile from './Profile';
import {getUserProfileTC, getUserStatus, updateUserStatus, savePhoto} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

    updateProfile = () => {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.authUserId;
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        if (prevProps.match.params.userId != this.props.match.params.userId){
            this.updateProfile();
        }  
    }

    componentDidMount(){
        this.updateProfile();
    }

    // componentDidUpdate(){
    //     let userId = this.props.match.params.userId;
    //     if(!userId){
    //         userId=this.props.authUserId;
    //     }
    //     this.props.getUserProfileTC(userId)
    //     this.props.getUserStatus(userId)
    // }
    
    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} 
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                isOwner={!this.props.match.params.userId} 
                savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, 
        {getUserProfileTC,
        getUserStatus,
        updateUserStatus, 
        savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)








