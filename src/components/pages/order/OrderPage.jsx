import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import Main from './Main/Main';
import Admin from './Admin/Admin';
import OrderPageContext from '../../../context/OrderPageContext';
import AddProductContext from '../../../context/AddProductContext';
import MenuContext from '../../../context/MenuContext';
import { fakeMenu2 } from '../../../fakeMenu';

const OrderPage = () => {

    //State
    const {username} = useParams() //retrieve the "name" field in url parameter object
    const [isAdminMode, setAdminMode] = useState(false);
    const [newProduct, setNewProduct] = useState("");
    const [menu, setMenu] = useState(fakeMenu2)
 

    //Behavior
    const OrderPageContextValue = {
        isAdminMode,
        setAdminMode
    }

    const AddProductContextValue = {
        newProduct,
        setNewProduct
    }

    const menuContextValue = {
        menu,
        setMenu
    }

    //Render
        return (
            
            <OrderPageContext.Provider value={OrderPageContextValue}>
                <AddProductContext.Provider value={AddProductContextValue}>              
                    <MenuContext.Provider value={menuContextValue}>
                        <OrderPageStyled>
                            <Navbar username={username} className="header"/> 
                            <Main className="main"/>
                            {isAdminMode && <Admin className="footer display"/>}
                        </OrderPageStyled> 
                    </MenuContext.Provider>
                </AddProductContext.Provider>
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