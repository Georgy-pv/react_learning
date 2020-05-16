import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';




const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper__content">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>

            </div>
        </BrowserRouter>
    );
}



export default App;
