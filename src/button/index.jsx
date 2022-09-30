import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, size, color, ...props }) => {
    const Large = Styled.button`
        background-color: ${color};
        padding: 16px;
        border: none;
        border-radius: 8px;
    `;

    const Small = Styled.button`
        background-color: ${color};
        padding: 8px;
        border: none;
        border-radius: 8px;
    `;

    let StyledButton;
    switch (size) {
        case 'large':
            StyledButton = Large;
            break;
        default:
            StyledButton = Small;
            break;
    }
    return <StyledButton onClick={onClick} {...props}>{label}</StyledButton>
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['large', 'small', 'medium']),
};

Button.defaultProps = {
    size: 'small',
};

export { Button };