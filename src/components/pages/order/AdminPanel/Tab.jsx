import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme'

export default function Tab({onClick, Icon, label, isSelected = false, isHidden = false}) {
//State

//Behavior

//Render


  return (
    <TabStyled onClick={onClick} isSelected={isSelected} isHidden={isHidden}>
            <div className="icon">
                {Icon && Icon}
            </div> 
            <div>{label}</div>
    </TabStyled>
  )
}

const TabStyled = styled.button`
    //conditional styling
    display: ${props => props.isHidden === true ? 'none' : 'flex'}; 
    background-color: ${props => props.isSelected === true ? `${theme.colors.background_dark}` : `${theme.colors.white}`};
    color: ${props => props.isSelected === true ? `${theme.colors.white}` : `${theme.colors.background_dark}`};


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
        margin: auto 0.3rem ;
    }
`