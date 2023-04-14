import React from 'react'
import styled from 'styled-components'
import Logo from "../reusable/Logo"


function NavbarLefSide({onClick}) {
  return (
    <NavbarLeftSideStyled>
          <Logo 
                size="small"
                onClick={onClick}
                className="logo-order-page"
            />
    </NavbarLeftSideStyled>
  )
}

// Styles
const NavbarLeftSideStyled = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
    margin-left: 2rem;

    .logo-order-page{
      cursor: pointer;
    }
`
export default NavbarLefSide