import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink activeClassName={classes.active} className={classes.item}  to="/profile">Profile</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/dialogs">Messages</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/feed">Feed</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/music">Music</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/settings">Setting</NavLink>   
        </nav>);
}
export default Navbar;