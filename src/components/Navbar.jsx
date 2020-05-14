import React from 'react';
import classes from './Navbar.module.css';


const Navbar = () =>{
    return (
        <nav className={classes.nav}>
            <a className={`${classes.item} ${classes.active}`} href="#">Profile</a>
            <a className={classes.item} href="#">Messages</a>
            <a className={classes.item} href="#">Feed</a>
            <a className={classes.item} href="#">Setting</a>
            <a className={classes.item} href="#">Music</a>
        </nav>
    );

    
}
export default Navbar;