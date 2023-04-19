import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../theme"
export default function Panel({content, isActive}) {
  return (
    <PanelStyled isActive={isActive}>
        {content}
    </PanelStyled>
  )
}

const PanelStyled = styled.div `
    display: ${props=> props.isActive ? "block" : "none"};
    align-items: center;
    box-shadow: ${theme.shadows.large};
    height: 15rem;
    z-index: 3;
    background-color: ${theme.colors.white};
    align-items: start;
    padding-top: 2rem;
    padding-left: 5rem;
`