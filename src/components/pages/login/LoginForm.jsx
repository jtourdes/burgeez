import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
// import theme from "../../../theme/index.js"



const LoginForm = () => {
    //State
    const [username, setUserName] = useState("");
    const navigate = useNavigate();

    //Comportement
    function handleChange(event) {
        setUserName(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        navigate(`/order/${username}`)
    }

    //Render
    return (
        <Form action="submit" onSubmit={handleSubmit}>
            <h1>
                Bienvenue chez nous !
            </h1>
      
            <div className="breakline" />
            <h2>Connectez-vous :</h2>
            <div className="input-container">
                <div className="input-with-icon">
                    <BsPersonCircle className='profile-icon'/>
                    <input
                        value={username}
                        type="text"
                        placeholder="Entrez votre prénom ..."
                        required={true}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">
                    <span>Accédez à mon espace</span>
                    <BsFillArrowRightCircleFill className="arrow-icon"/>
                </button>
            </div>
        </Form>
    );
}


//Styles
const Form = styled.form`
    h1 {
        color:white;    
        font-size:4rem;
        font-family: 'Amatic SC', cursive;
        font-weight: 700;
    }

    h2 {
        color:white;    
        font-size:3rem;
        font-family: 'Amatic SC', cursive;
        font-weight: 700;
    }

    input {
        font-size:1rem;
        font-weight: bold;
        border: none;     
    }

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .input-with-icon{
            height: 4rem;
            min-width: 20rem;
            max-width: 30rem;
            border-radius: 7px;
            border-style: none;
            color:white;   
            background-color: white;
            display: flex;
            align-items: center;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        min-width: 20rem;
        max-width: 30rem;
        background-color: orange;
        border-radius: 7px;
        border-style: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
        padding: 0rem 0.5rem;
    }

    .profile-icon {
        color: grey;
        margin: 1rem
    }
    .arrow-icon {
        margin: 0.5rem
    }

    .breakline {
        height: 4px;
        width: 21rem;
        background-color: orange;
        margin: auto;
    }



`
 

export default LoginForm;