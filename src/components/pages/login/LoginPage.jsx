import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from "../Logo"

const LoginPage = () => {
    return (  
        <LoginSection>
            <Logo />
            <LoginForm />
        </LoginSection>
    );
}


const LoginSection = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.800),rgba(0, 0, 0, 0.5)),url("/images/F03 burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default LoginPage;