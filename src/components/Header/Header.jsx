import React from 'react';
import classes from'./Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) =>{
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://i2.wp.com/nopcproblem.ru/wp-content/uploads/2019/05/discord-logo.png?ssl=1" />
            <div className={classes.right}>
                <div className={classes.loginBlock}>
                    {props.isAuth ? 
                    <div className="">
                        <button className={classes.logoutBtn} onClick={props.logout}>Logout</button>
                        <span className={classes.auth}>{props.login}</span> 
                    </div> : 
                    <NavLink to={'/login'}><span>Login</span></NavLink>}
                    
                </div>
               
            </div>

            
        </header>
    );
}

export default Header;