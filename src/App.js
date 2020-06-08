import React from 'react';
import './App.css';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';




class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){  
            return <Preloader/>
        }
        
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="app-wrapper__content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>

                <AppContainer />

            </Provider>
        </BrowserRouter>
    );
}

export default MainApp;
