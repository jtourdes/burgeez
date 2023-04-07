import React from 'react'
import Profile from "./Profile"
import { MdAccountCircle } from 'react-icons/md'
import styled from 'styled-components'
import ToggleButton from '../ToggleButton'
import {useState} from "react"
import { toast } from "react-toastify";

function NavbarRightSide({username, disconnectUser, adminNotification}) {

//State
const [isAdminMode, setAdminMode] = useState(false)

//Behavior
function onToggle (){
  if (!isAdminMode){
    setAdminMode(true)
    toast.success("Admin Mode activated !", {
    position: toast.POSITION.BOTTOM_RIGHT 
    });
  } else {
    setAdminMode(!isAdminMode)
  }
}

//Render
  return (
    <NavbarRightSideStyled>
        <ToggleButton 
          onToggle={onToggle}
          labelIfChecked={"Mode Admin activé"}
          labelIfUnchecked={"Mode Admin désactivé"}
        />
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