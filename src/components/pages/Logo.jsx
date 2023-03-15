import styled from "styled-components"
import { theme } from "../../theme"

const Logo = ()=> {
  return (
    <LogoContainer>
        <p>Holyyyy</p>
        <img src="/images/F03 logo-orange.png" alt="" />
        <p>Burgeez</p>
    </LogoContainer>
  )
}

// Styles
const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content:center;
    min-width: 2rem;
    transform: scale();

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
`
export default Logo