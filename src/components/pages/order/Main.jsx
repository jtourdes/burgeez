import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../theme/index"

function Main() {
  return (
    <MainStyled>
        <div className='basket'>panier de commande</div>
        <div className='items'>items</div>
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