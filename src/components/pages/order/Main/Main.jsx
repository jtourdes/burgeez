import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../../theme/index"
import Basket from './Basket'
import Menu from './Menu'

function Main() {
  return (
    <MainStyled>
       <Basket />
        <Menu />
    </MainStyled>
  )
}

// Styles
const MainStyled = styled.div `
    background-color: ${theme.colors.background_white} ;
    flex: 1;
    z-index: 0;
    display: grid;
    grid-template-columns: 25% 1fr;
    align-items: center;
    justify-content: center;

`

export default Main