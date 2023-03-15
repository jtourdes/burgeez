import styled from "styled-components"
import { theme } from "../../theme"

const Logo = ({size})=> {
  return (
    <Test className={size}>
      <LogoContainer >
        <p>Holyyyy</p>
        <img src="/images/F03 logo-orange.png" alt="" />
        <p>Burgeez</p>
    </LogoContainer>
    </Test>
    
  )
}

// Styles
const Test = styled.div`
  transform: scale(0.6);
`
const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content:center;
    min-width: 2rem;

    p {
    font-size: ${theme.fonts.P6};    
    font-family: 'Amatic SC', cursive;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
    z-index: 2;
    margin: 0;
    }

    img {
      height:6rem;
      object-fit: contain;
      object-position: center;
      margin: 0 ${theme.spacing.sm};
    }

    .small {
      background-color: red;
      transform: scale(0.5);
    }

    .medium {
      transform: scale(0.5);
    }

    .tall {
      transform: scale(1);
    }
`
export default Logo