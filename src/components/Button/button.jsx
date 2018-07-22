import React from 'react';

const Button = (props) => {
    var buttonType = props.class;
    console.log("button props: ", props);
    return (
        <button className={buttonType}>
            {props.title}
        </button>
    )
};

export default Button;