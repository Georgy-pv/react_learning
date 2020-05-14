import React from 'react';
import classes from'./Header.module.css';


const Header = () =>{
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://i2.wp.com/nopcproblem.ru/wp-content/uploads/2019/05/discord-logo.png?ssl=1" />
            <div className={classes.search}>
                <input className={classes.search__input} type="text" placeholder="Search"/>
                <button type="button" className={classes.search__btn}>S</button>
            </div>
            

        </header>
    );
}

export default Header;