import React from 'react'
import styled from 'styled-components'

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
    background-color: aqua;
    flex: 1;
    display: grid;
    grid-template-rows: () ;
    grid-template-columns: (1fr 3fr);

    .basket {
        grid-area: 1 / 1 / 2 / 2;
    }

    .items {
        grid-area: 1 / 2 / 2 / 3;
    }
`

export default Main