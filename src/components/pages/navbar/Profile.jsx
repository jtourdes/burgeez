import styled from "styled-components"
import {theme} from "../../../theme/index.js"

export default function Profile({username, Icon, linkLabel, linkAction}) {
    // State

    // Behavior


    //Render
    return (
    <ProfileContainerStyled>
      <ProfileInfo>
        <p className="welcome-user">Hey, <span className="username-highlight">{username}</span></p>
        <p onClick={linkAction} className="link">{linkLabel}</p>
      </ProfileInfo>
      {Icon && Icon}
    </ProfileContainerStyled>
  )
}

// Styles
const ProfileContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  color: ${theme.colors.greyDark};
  font-family:'Open Sans', sans-serif;

  .icon {
   transform: scale(2.5);
   margin: 0;
  }
`
  
const ProfileInfo = styled.div`
  p {
    margin: 0;
    text-align: right;
  }

  .welcome-user{
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.fonts.weights.medium};
    margin-bottom: 0.5rem;

    .username-highlight {
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};;
    }
  }

  .link {

    font-size: ${theme.fonts.XS};
    font-weight: ${theme.fonts.weights.light};
  }
`
