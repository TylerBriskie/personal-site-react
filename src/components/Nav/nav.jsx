import React from 'react';
import FontAwesome from 'react-fontawesome';
import './nav.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li className="yellow">
                    <a href="#">
                        <FontAwesome className='nav-icon' size='3x' name='code ' />
                        <p>Software Engineer</p>
                    </a>

                </li>
                <li className="pink">
                    <a href="#">
                        <FontAwesome className='nav-icon' size='3x' name='soundcloud ' />
                        <p>Musician</p>
                    </a>
                </li>
                <li className="blue">
                    <a href="#">
                        <FontAwesome className='nav-icon' size='3x' name='gamepad ' />
                        <p>Game Developer</p>
                    </a>
                </li>
                <li className="red">
                    <a href="#">
                        <FontAwesome className='nav-icon' size='3x' name='envelope ' />
                        <p>Contact</p>
                    </a>

                </li>
            </ul>
        </div>
    )
};

export default Nav;