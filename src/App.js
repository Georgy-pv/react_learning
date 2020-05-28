import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer/>
                <div className="app-wrapper__content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={ () => <DialogsContainer />} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" render={ () => <UsersContainer />} />
                </div>

            </div>
        </BrowserRouter>
    );
}



export default App;
