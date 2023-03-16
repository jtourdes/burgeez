import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo'
import Profile from './Profile'



const Navbar = ({username}) => {
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
        <NavLeftSide>
            <Logo 
                size="small"
                onClick={refreshPage}
            />
        </NavLeftSide>
        <NavRightSide>
            <Profile
                username={username}
                Icon={<MdAccountCircle className="icon"/>}
                linkLabel={"Se déconnecter"}
                linkAction={disconnectUser}
            />
        </NavRightSide>
    </NavbarStyled>
  )
}

// Styles


const NavbarStyled = styled.div`
    display: grid;
    grid-template-rows: repeat(6.25rem);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const NavLeftSide = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    justify-self: start;
`

const NavRightSide = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
`
export default Navbar;