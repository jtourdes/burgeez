import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import Main from './Main';

const OrderPage = () => {

    //State
    const {username} = useParams() //retrieve the "name" field in url parameter object

    //Behavior

    //Render
        return (
            <OrderPageStyled>
                <Navbar username={username} className="front"/> 
                <Main className="behind"/>
            </OrderPageStyled> 
        );
    }

// Styles

const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

export default OrderPage;