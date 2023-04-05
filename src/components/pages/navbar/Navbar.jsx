
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import NavbarLefSide from './NavbarLefSide'
import NavbarRightSide from './NavbarRightSide'
import {theme} from "../../../theme/index"
import { refreshPage } from '../../../utils/windows'

const Navbar = ({username}) => {
    // State
    const navigate = useNavigate();

    // Behavior
    function disconnectUser () {
        navigate("/")
    } 

  
    // Render
  return (
    <NavbarStyled>
        <NavbarLefSide onClick={refreshPage}/>
        <NavbarRightSide username={username} disconnectUser={disconnectUser} />
    </NavbarStyled>
  )
}

// Styles


const NavbarStyled = styled.nav`
    display: grid;
    grid-template-rows: 10vh;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    background-color: ${theme.colors.white};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 1;
    position: sticky;
`



export default Navbar;