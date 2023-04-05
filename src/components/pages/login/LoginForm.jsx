import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs";
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import {theme} from "../../../theme"

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
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
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
                    className={"regular-btn"}
                />
            </div>
        </LoginFormStyled>
    );
}


//Styles
const LoginFormStyled = styled.form`
    h1 {
        color:${theme.colors.white};    
        font-size: ${theme.fonts.P5};
        font-family: 'Amatic SC', cursive;
        font-weight: ${theme.fonts.weights.bold};
    }

    h2 {
        color:${theme.colors.white};    
        font-size:${theme.fonts.P4};
        font-family: 'Amatic SC', cursive;
        font-weight: ${theme.fonts.weights.bold};
    }

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${theme.spacing.sm};
    }
    
    .breakline {
        height: 4px;
        width: 21rem;
        background-color: ${theme.colors.primary};
        margin: auto;
    }

    .regular-btn {
        min-width: 18rem;
    }
`

export default LoginForm;