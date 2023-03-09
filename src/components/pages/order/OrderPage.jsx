import React from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const OrderPage = (props) => {

    //State
    const navigate = useNavigate();
    const {username} = useParams() //retrieve the "name" field in url parameter object

    //Comportement

    //Render
        return (  
            <div>
                <h1>Bonjour {username}</h1>
                <button onClick={()=>{navigate("/")}} >Déconnexion</button>
            </div>
        );
    }

export default OrderPage;