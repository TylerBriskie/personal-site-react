import React from 'react';
import FontAwesome from 'react-fontawesome';
import './nav.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="#" className="yellow"><FontAwesome className='nav-icon' size='3x' name='code ' /></a>
                </li>
                <li>
                    <a href="#" className="pink"><FontAwesome className='nav-icon' size='3x' name='soundcloud ' /></a>
                </li>
                <li>
                    <a href="#"><FontAwesome className='nav-icon' size='3x' name='gamepad ' /></a>
                </li>
                <li>
                    <a href="#" className="purple"><FontAwesome className='nav-icon' size='3x' name='envelope ' /></a>
                </li>
            </ul>
        </div>
    )
};

export default Nav;