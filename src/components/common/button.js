import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const style = props.primary ? 'button button-primary' : 'button';
    return (
        <span
            className={style}
            onClick={props.action}
        >
            {props.text}
        </span>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
