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
        
        let a = this.state;
        let b = this.props;
        console.log('componentDidUpdate')
    }

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=8383;
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
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfileTC,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)








