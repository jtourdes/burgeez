import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme'

export default function Tab({onClick, Icon, label, isSelected = false}) {
//State

//Behavior

//Render


  return (
    <TabStyled onClick={onClick} isSelected={isSelected}>
            <div className="icon">
                {Icon && Icon}
            {label}
            </div> 
    </TabStyled>
  )
}

const TabStyled = styled.button`
    //conditional styling
    background-color: ${props => props.isSelected ? `${theme.colors.background_dark}` : `${theme.colors.white}`};
    color: ${props => props.isSelected ? `${theme.colors.white}` : `${theme.colors.background_dark}`};

    display: flex;
    height: 40px;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    cursor: pointer;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    


    //fonts
    font-family: ${theme.fonts.XS};
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.greyDark};
    border: none;
    box-shadow: ${theme.shadows.small} ;
    z-index: 2;

    .icon {
        display:flex;
        align-items: center;
        justify-content: center; 
    }
`