import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo'
import Profile from './Profile'



const Navbar = () => {
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
        <Logo 
            size="small"
            onClick={refreshPage}
        />
        <Profile
            username="Jean"
            Icon={<MdAccountCircle className="icon"/>}
            linkLabel={"Se déconnecter"}
            linkAction={disconnectUser}
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