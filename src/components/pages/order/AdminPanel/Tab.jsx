import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme'

export default function Tab({index, Icon, label, isSelected, isActive}) {
//State


//Behavior


//Render
  return (
    <TabStyled>
        <div className="icon">
            {Icon && Icon}
        </div> 
        <div>{label}</div>  
    </TabStyled>
    

  )
}

const TabStyled = styled.button`
    background-color: red;
    height: 100px;
    height: 40px;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    background-color: ${theme.colors.white};
    font-family: ${theme.fonts.XS};
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.greyDark};
    border: none;
    box-shadow: ${theme.shadows.small} ;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 2;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100px;
    color: black;

    .icon {
        margin: auto 0.3rem ;
    }

    .true{
    background-color: black;
    color: white;
  }
`