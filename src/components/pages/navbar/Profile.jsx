import styled from "styled-components"
import {MdAccountCircle} from "react-icons/md"
import {theme} from "../../../theme/index.js"


export default function Profile({username}) {
    // State

    // Behavior

    //Render
    return (
    <ProfileContainerStyled>
      <ProfileInfo>
        <p className="user">Hey, <span className="username">{username}</span></p>
        <p className="link">Se déconnecter</p>
      </ProfileInfo>
      <MdAccountCircle className="icon"/>
    </ProfileContainerStyled>
  )
}

// Styles
const ProfileContainerStyled = styled.div`
  /* background-color: blue; */
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  color: ${theme.colors.greyDark};

  p {
    margin: 0;
  }

  .user {
    font-family:'Open Sans', sans-serif; ;
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.fonts.weights.medium};
    margin-bottom: 0.5rem;

  }

  .username {
    color: orange;
    font-weight: ${theme.fonts.weights.bold};;
  }

  .link {
    font-family:'Open Sans', sans-serif; ;
    font-size: ${theme.fonts.XS};
    font-weight: ${theme.fonts.weights.light};
  }
  .icon {
   transform: scale(2.5);
   /* background-color: green; */
   margin: 0;

  }
`
  
const ProfileInfo = styled.div`
  /* background-color: red; */
 

`
