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
    display: grid;
    grid-template-rows: () ;
    grid-template-columns: (1fr 3fr);
    z-index: 0;

    .basket {
        grid-area: 1 / 1 / 2 / 2;
    }

    .items {
        grid-area: 1 / 2 / 2 / 3;
    }
`

export default Main