import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import Main from './Main/Main';
import AdminPanel from './Admin/Admin';
import OrderPageContext from '../../../context/OrderPageContext';

const OrderPage = () => {

    //State
    const {username} = useParams() //retrieve the "name" field in url parameter object
    const [isAdminMode, setAdminMode] = useState(false);
 

    //Behavior
    const OrderPageContextValue = {
        isAdminMode,
        setAdminMode
    }

    //Render
        return (
            <OrderPageContext.Provider value={OrderPageContextValue}>
                <OrderPageStyled>
                    <Navbar username={username} className="header"/> 
                    <Main className="main"/>
                    {isAdminMode && <AdminPanel className="footer display"/>}
                </OrderPageStyled> 
            </OrderPageContext.Provider>
        );
    }
 
// Styles

const OrderPageStyled = styled.div`
    display: grid;
    grid-auto-rows: (100px, auto);
    grid-template-areas: 
    "hd"
    "mn"
    "ft";
    height: 100vh;
    width: 100vw;

    .header {
        grid-area: hd;
        position: sticky;
    }

    .main {
        grid-area: mn;
    }

    .footer {
        grid-area: ft;
    }

    
`

export default OrderPage;