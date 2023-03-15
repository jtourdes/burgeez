import styled from 'styled-components'
import Logo from '../Logo'
import Profile from './Profile'


const Navbar = () => {
    // State

    // Behavior

    // Render
  return (
    <NavbarStyled>
        <Logo 
            size="small"
        />
        <Profile
            username="Jean"
        />
    </NavbarStyled>
  )
}

// Styles

const NavbarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 100vw;
    height: 6.25rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export default Navbar;