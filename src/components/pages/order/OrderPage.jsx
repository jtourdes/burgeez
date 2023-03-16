import React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';

const OrderPage = () => {

    //State
    const navigate = useNavigate();
    const {username} = useParams() //retrieve the "name" field in url parameter object

    //Comportement

    //Render
        return (
            <OrderPageStyled>
                <Navbar username={username}/>
                <Main>
                    <div className='basket'>panier de commande</div>
                    <div className='items'>items</div>
                </Main>
            </OrderPageStyled> 
        );
    }

// Styles

const OrderPageStyled = styled.div`
    height: 100vh
`

const Main = styled.div`
    display: grid;
    grid-template-rows: (100vh) ;
    grid-template-columns: (1fr 3fr);

    .basket {
        grid-area: 1 / 1 / 2 / 2;
    }

    .items {
        grid-area: 1 / 2 / 2 / 3;
    }
`


export default OrderPage;