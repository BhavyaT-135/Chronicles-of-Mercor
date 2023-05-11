import React from 'react'
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-button">
        <button>Join Beta</button>
      </div>
    </header>
  );
};

export default Header;