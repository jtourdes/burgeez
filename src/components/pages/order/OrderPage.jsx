import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import Main from './Main/Main';
import AdminPanel from './AdminPanel/AdminPanel';
import { Context } from '../Context';

const OrderPage = () => {

    //State
    const {username} = useParams() //retrieve the "name" field in url parameter object

    const [isAdminMode, setAdminMode] = useState(false);
 

    //Behavior


    //Render
        return (
            <Context.Provider value={[isAdminMode, setAdminMode]}>
                <OrderPageStyled>
                    <Navbar username={username} className="header"/> 
                    <Main className="main"/>
                    <AdminPanel className="footer"/>
                </OrderPageStyled> 
            </Context.Provider>
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