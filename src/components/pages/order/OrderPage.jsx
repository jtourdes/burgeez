import React from 'react';
import { useNavigate } from "react-router-dom";

const OrderPage = (props) => {

    //State
    const navigate = useNavigate();

    //Comportement

    //Render
        return (  
            <div>
                <h1>Bonjour {props.name}</h1>
                <button onClick={()=>{navigate("/")}} >Déconnexion</button>
            </div>
        );
    }

export default OrderPage;