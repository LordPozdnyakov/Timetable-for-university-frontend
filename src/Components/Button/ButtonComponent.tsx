import React from 'react';
import "./ButtonStyles.scss"

// @ts-ignore
const ButtonComponent = (props) => {
    return (
        <button {...props} className="main__button">{props.children}</button>
    );
};

export default ButtonComponent;