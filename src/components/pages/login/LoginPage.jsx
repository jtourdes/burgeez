import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from "../Logo"

const LoginPage = () => {
    return (  
        <LoginPageStyled>
            <Logo className={"small-logo"}/>
            <LoginForm />
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url("/images/F03 burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;

    .small-logo {
        transform: scale(1.5);
    }
`

export default LoginPage;