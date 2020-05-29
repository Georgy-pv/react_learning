import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuth} from '../../redux/auth-reducer'



class HeaderAPIContainer extends React.Component{
    componentDidMount(){
        this.props.setAuth();
    }
    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps,{
    setAuth
})(HeaderAPIContainer);