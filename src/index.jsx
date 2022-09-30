import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Outlined = Styled.button`
    padding: 16px;
`;

const Button = ({ label, onClick, ...props }) => {
    let StyledButton = Outlined;
    return <StyledButton onClick={onClick} {...props}>{label}</StyledButton>
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export { Button };