import React from 'react';
import './App.css';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspenseComponent } from './hoc/withSuspenseComponent';



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));




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
                    <Route path="/profile/:userId?" render={withSuspenseComponent(ProfileContainer)} />
                    <Route path="/dialogs" render={withSuspenseComponent(DialogsContainer)}/>
                    <Route path="/feed" component={Feed} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" render={withSuspenseComponent(UsersContainer)} />
                    <Route path="/login" render={withSuspenseComponent(Login)} />
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
        <HashRouter >
            <Provider store={store}>

                <AppContainer />

            </Provider>
        </HashRouter>
    );
}

export default MainApp;
