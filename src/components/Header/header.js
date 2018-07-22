import React, { Component } from 'react';
import headerLogo from '../../images/header-logo-no-bg.png';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <img src={headerLogo} />
            </header>
        );
    }
}

export default Header;