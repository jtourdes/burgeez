import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';


export default function PrimaryButton({label, Icon, ...otherProps}) {
  return (
    <ButtonStyled type="submit">
        <span>{label}</span>
        {Icon && Icon}
    </ButtonStyled>
  )
}

// Styles
const ButtonStyled = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    min-width: 18rem;
    padding: 0 ${theme.spacing.sm};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background_white};
    font-size: ${theme.fonts.P0};
    font-weight: bold;
    border-radius: ${theme.borderRadius.round};
    border-style: none;

.arrow-icon {
    margin: ${theme.spacing.xs};
}

`