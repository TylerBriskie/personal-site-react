import React from 'react';
import Button from '../Button/button';


const Nav = (props) => {
    console.log(props);
    var pages = [];
    for (var i=0; i < props.destinations.length; i++){
        pages.push(
            <li>
            <Button key={i} class="nav" title = {props.destinations[i]} />
            </li>
        );
    }

    return (
        <div>
            <ul>
                {pages}
            </ul>
        </div>
    )
};

export default Nav;