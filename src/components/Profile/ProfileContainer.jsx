import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileDAL } from '../../API/API';

class ProfileAPIContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=9;
        }
        profileDAL(userId).then(response => {
            this.props.setUserProfile(response.data);
        })
       
    }
    
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WitRouterProfileCompoment = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(WitRouterProfileCompoment);