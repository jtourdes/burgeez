import React from 'react'
import styled from 'styled-components'
import Logo from "../Logo"


function NavbarLefSide({refreshPage}) {
  return (
    <NavbarLeftSideStyled>
          <Logo 
                size="small"
                onClick={refreshPage}
            />
    </NavbarLeftSideStyled>
  )
}

// Styles
const NavbarLeftSideStyled = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
`
export default NavbarLefSide