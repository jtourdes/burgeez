
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import NavbarLefSide from './NavbarLefSide'
import NavbarRightSide from './NavbarRightSide'
import {theme} from "../../../theme/index"

const Navbar = ({username, disconnectUser}) => {
    // State
    const navigate = useNavigate();

    // Behavior
    function refreshPage () {
        window.location.reload()
    }

    function disconnectUser () {
        navigate("/")
    } 


    // Render
  return (
    <NavbarStyled>
        <NavbarLefSide onClick={refreshPage}/>
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

// Styles


const NavbarStyled = styled.nav`
    display: grid;
    grid-template-rows: repeat(10vh);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    background-color: ${theme.colors.white};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 1;
`



export default Navbar;