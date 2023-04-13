import styled from "styled-components"
import {theme} from "../../theme/index"
import PrimaryButton from "./PrimaryButton"
import {TiDelete} from "react-icons/ti"



function Card({id, img, title, leftDescription, buttonLabel, isAdminMode, deleted}) {
  return (
    <FoodCardStyled>
        {isAdminMode && <TiDelete onClick={()=>deleted(id)} className="delete-icon"/>}
        <ImgContainerStyled>
            <img src={img} alt="" />
        </ImgContainerStyled>
        <FoodInfoStyled>
        <h2>{title}</h2>
        <div className="description">
            <p>{leftDescription}</p>
            <PrimaryButton label={buttonLabel} className={"small-btn"}/>
        </div>
        </FoodInfoStyled>
    </FoodCardStyled>
  )
}

// Styles
const FoodCardStyled = styled.div`
    height: 21rem ;
    width: 15rem;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.medium};
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;     
    
    .delete-icon {
        transform: scale(1.5);
        align-self: flex-end;
        margin: 1rem;
    }
`
const ImgContainerStyled = styled.div`
    height: 145px;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    
    img {
        max-height: 140px;
        max-width: 180px;
    }
`

const FoodInfoStyled = styled.div`
    h2 {
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P4};
        margin: 0rem 1rem 0rem 1rem
        
    }

    p {
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.P1};
        font-family: "Open Sans", sans-serif;
    }

    .description {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .price {
        }

        .small-btn{
        height: 2.5rem;
        width: 6rem ;
        }   
    }
`
export default Card