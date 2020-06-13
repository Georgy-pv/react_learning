import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <NavLink activeClassName={classes.active} className={classes.item} to="/profile">Profile</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/dialogs">Messages</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/feed">Feed</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/music">Music</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/settings">Setting</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/users">Users</NavLink>
            <div className={classes.bestfriends}>
                {props.friendElements}
            </div>
        </nav>);
}
export default Navbar;