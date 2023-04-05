import React from 'react'
import Profile from "./Profile"
import { MdAccountCircle } from 'react-icons/md'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

function NavbarRightSide({username, disconnectUser, adminNotification}) {

  return (
    <NavbarRightSideStyled>
        <ToggleButton onToggle={adminNotification}/>
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
    display: flex;
    align-items: center;
`

export default NavbarRightSide