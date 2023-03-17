import styled from "styled-components"
import {theme} from "../../../../theme/index"
import PrimaryButton from "../../login/PrimaryButton"
import { formatPrice } from "../../../../utils/maths"


function FoodCard({img, title, price}) {
  return (
    <FoodCardStyled>
        <ImgContainerStyled>
            <img src={img} alt="" />
        </ImgContainerStyled>
        <FoodInfoStyled>
        <h2>{title}</h2>
        <div className="description">
            <p classNale="price">{formatPrice(price)}</p>
            <PrimaryButton label={"Ajouter"} className={"small-btn"}/>
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
    box-shadow: ${theme.shadows.small};
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;          
`
const ImgContainerStyled = styled.div`
    height: 145px;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    
    img {
        max-height: 145px;
        max-width: 200px;
    }
`

const FoodInfoStyled = styled.div`
    h2 {
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P4};
        margin-left: 1rem;
        align-self: flex-start;
    }

    p {
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.P1};
        font-family: "Open Sans", sans-serif;
        /* font-weight: ${theme.fonts.weights.bold}; */
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
export default FoodCard