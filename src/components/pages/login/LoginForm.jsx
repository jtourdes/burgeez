import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
    //State
    const [name, setName] = useState("");
    const navigate = useNavigate();

    //Comportement
    function handleChange (event) {
        setName(event.target.value)
    }

    function handleSubmit (event){
        event.preventDefault()
        alert(`Bonjour ${name}`)
    }

    //Render
    return (  
        <div>
            {/* <form action="submit" onSubmit={handleSubmit}> */}
            <form action="submit" onSubmit={()=>{navigate("/order")}}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous :</h2>
                <input 
                    value={name} 
                    type="text" 
                    placeholder="Entrez votre prénom ..." 
                    required={true} 
                    onChange={handleChange}
                />
                <button type="submit">Accédez à votre espace</button>
            </form>
        </div>
    );
}

export default LoginForm;