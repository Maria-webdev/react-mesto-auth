import React from 'react';
import header__logo from './../images/header/__logo/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={header__logo} alt="логотип" />
    </header>
  );
}

export default Header;