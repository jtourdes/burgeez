import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';


export default function PrimaryButton({label, Icon, className, ...otherProps}) {
  return (
    <ButtonStyled className={className} type="submit">
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
    padding: 0 ${theme.spacing.sm};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: bold;
    border-radius: ${theme.borderRadius.round};
    border-style: none;
    cursor: pointer;

    :hover{
      background-color: ${theme.colors.white};
      border: 1px solid;
      color: ${theme.colors.primary};
    }
.arrow-icon {
    margin: ${theme.spacing.xs};

}

`