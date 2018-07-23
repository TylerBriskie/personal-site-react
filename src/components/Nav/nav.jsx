import React from 'react';
import FontAwesome from 'react-fontawesome';
import './nav.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href='#'><FontAwesome className='nav-icon' size='3x' name='github ' /></a>
                </li>
                <li>
                    <a href="#"><FontAwesome className='nav-icon' size='3x' name='soundcloud ' /></a>
                </li>
                <li>
                    <a href="#"><FontAwesome className='nav-icon' size='3x' name='code ' /></a>
                </li>
                <li>
                    <a href="#"><FontAwesome className='nav-icon' size='3x' name='gamepad ' /></a>
                </li>
                <li>
                    <a href="#"><FontAwesome className='nav-icon' size='3x' name='envelope ' /></a>
                </li>
            </ul>
        </div>
    )
};

export default Nav;