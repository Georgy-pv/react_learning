import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {getUserProfileTC} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../API/API';


class ProfileAPIContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=9;
        }
        this.props.getUserProfileTC(userId)
       
    }
    
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}


let WitRouterProfileCompoment = withRouter(ProfileAPIContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export const ProfileContainer = connect(mapStateToProps, {
    getUserProfileTC
})(WitRouterProfileCompoment);









