import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs";
import Input from './Input';
import PrimaryButton from './PrimaryButton';
// import theme from "../../../theme/index.js"


const LoginForm = () => {
    //State
    const navigate = useNavigate();
    const [username, setUserName] = useState("");

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
                <Input
                    value={username}
                    onChange={handleChange}
                    Icon={<BsPersonCircle className="profile-icon"/>}
                    placeholder={"Entrez votre prénom ..."}
                    required={true}
                />
                <PrimaryButton 
                    label={"Accédez à mon espace"}
                    Icon={ <BsFillArrowRightCircleFill className="arrow-icon"/>}
                />
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

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .breakline {
        height: 4px;
        width: 21rem;
        background-color: orange;
        margin: auto;
    }
`
 

export default LoginForm;