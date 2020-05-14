import React from 'react';

const Header = () =>{
    return (
        <header className="header">
            <img className="header__logo" src="https://i2.wp.com/nopcproblem.ru/wp-content/uploads/2019/05/discord-logo.png?ssl=1" />
            <div className="header__search">
                <input className="header__search-input" type="text" placeholder="Search"/>
                <button type="button" className="header__search-btn">S</button>
            </div>
            

        </header>
    );
}

export default Header;