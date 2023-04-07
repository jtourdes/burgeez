import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import Main from './Main/Main';
import { toast } from 'react-toastify';
import AdminPanel from '../AdminPanel';


const OrderPage = ({}) => {

    //State
    const {username} = useParams() //retrieve the "name" field in url parameter object

    //Behavior


    //Render
        return (
            <OrderPageStyled>
                <Navbar username={username} className="header"/> 
                <Main className="main"/>
                <AdminPanel className="footer"/>
            </OrderPageStyled> 
        );
    }

// Styles

const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    .header {
        grid-area: header;
    }

    .main {
        grid-area: main;
        overflow: auto;
    }

    .footer {
        grid-area: footer;
        position: sticky;
    }

    
`

export default OrderPage;