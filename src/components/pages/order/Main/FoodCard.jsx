import styled from "styled-components"
import {theme} from "../../../../theme/index"
import PrimaryButton from "../../login/PrimaryButton"
import { formatPrice } from "../../../../utils/maths"


function FoodCard({img, title, price}) {
  return (
    <FoodCardStyled>
        <div className="img-container">
        <img src={img} alt="" />
        </div>
        
        <h2>{title}</h2>
        <div className="bottom">
            <p classNale="price">{formatPrice(price)}</p>
            <PrimaryButton label={"Ajouter"} className={"small-btn"}/>
        </div>
        
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
    
    .img-container{
        height: 145px;
        max-width: 200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    img {
        max-height: 145px;
        max-width: 200px;
    }

    h2 {
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.P4};
        margin-left: 1rem;
        align-self: flex-start;
    }

    p {
        font-family: "Open Sans", sans-serif;
    }

    .bottom {
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