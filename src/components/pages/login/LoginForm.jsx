import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react';


const LoginForm = () => {
    const [name, setName] = useState("");

    function onChange (event) {
        setName(event.target.value)
    }

    function onClick (){
        alert("Bonjour "+ name)
    }

    return (  
        <div>
            <h2>Connectez-vous :</h2>
            <form action="">
                <input type="text" placeholder="Entrez votre prénom ..." required={true} onChange={onChange}/>
                <button onClick={onClick} type="submit">Accédez à votre espace</button>
            </form>
        </div>
    );
}

export default LoginForm;