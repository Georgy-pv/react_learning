import React from 'react';

const Navbar = () =>{
    return (
        <nav className="nav">
            <div><a className="nav__link" href="#">Profile</a></div>
            <div><a className="nav__link" href="#">Messages</a></div>
            <div><a className="nav__link" href="#">Feed</a></div>
            <div><a className="nav__link" href="#">Setting</a></div>
            <div><a className="nav__link" href="#">Music</a></div>
        </nav>
    );
}

export default Navbar;