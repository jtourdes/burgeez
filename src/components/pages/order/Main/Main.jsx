import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../../theme/index"
import Basket from './Basket'
import Menu from './Menu'
import AdminPanel from '../Admin/Admin'

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
    z-index: 0;
    display: grid;
    grid-template-columns: 30% 1fr;
    align-items: center;
    justify-content: center;
    overflow: auto; 
`

export default Main