import React, { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

export function Login(){
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const whereToSend = location.state?.from?.pathname || "/";

    const loginAccount = (e) => {
        e.preventDefault();
        auth.login(userName, () => {
            navigate(whereToSend, { replace: true });
        });
        console.log(whereToSend)
    }

    return(
        <>
            <h1>Login</h1>
            <form action="" onSubmit={loginAccount}>
                <label htmlFor="user">Escribe tu nombre de usuario:</label>
                <input type="text" id="user" onChange={({ target }) => setUserName(target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </>
    );
}