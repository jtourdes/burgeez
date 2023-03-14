import React from 'react'
import styled from 'styled-components';


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
    min-width: 20rem;
    max-width: 30rem;
    background-color: orange;
    border-radius: 7px;
    border-style: none;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 0rem 0.5rem;

.arrow-icon {
    margin: 0.5rem
}

`