import React from 'react'
import Profile from "./Profile"
import { MdAccountCircle } from 'react-icons/md'
import styled from 'styled-components'

function NavbarRightSide({username, disconnectUser}) {
  return (
    <NavbarRightSideStyled>
        <Profile
                username={username}
                Icon={<MdAccountCircle className="icon"/>}
                linkLabel={"Se déconnecter"}
                linkAction={disconnectUser}
            />
    </NavbarRightSideStyled>
  )
}

// Styles
const NavbarRightSideStyled = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
`

export default NavbarRightSide