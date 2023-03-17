import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../../theme/index"
import Menu from './Menu'

function Main() {
  return (
    <MainStyled>
        <Menu />
    </MainStyled>
  )
}

// Styles
const MainStyled = styled.div `
    background-color: ${theme.colors.background_white} ;
    flex: 1;
    z-index: 0;

`

export default Main