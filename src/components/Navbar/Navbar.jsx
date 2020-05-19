import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import BestFriends from './BestFriends/BestFriends';


const Navbar = (props) => {
    let friendElements = props.state.bestfriends.map((f) => {
        return <BestFriends name={f.name} imgSrc={f.img} />
    });
    return (
        <nav className={classes.nav}>
            <NavLink activeClassName={classes.active} className={classes.item}  to="/profile">Profile</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/dialogs">Messages</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/feed">Feed</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/music">Music</NavLink>
            <NavLink activeClassName={classes.active} className={classes.item} to="/settings">Setting</NavLink>
            <div className={classes.bestfriends}>
                {friendElements}
            </div>
        </nav>);
}
export default Navbar;