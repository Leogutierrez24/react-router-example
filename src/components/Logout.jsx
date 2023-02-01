import React from "react";
import { useAuth } from "./auth";

export function Logout(){
    const auth = useAuth();

    const logoutAccount = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return(
        <>
            <h1>Logout</h1>
            <form action="" onSubmit={logoutAccount}>
                <label htmlFor="user">¿Seguro que quieres salir?</label>
                <button type="submit">Salir</button>
            </form>
        </>
    );
}