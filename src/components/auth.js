import React, { useContext, createContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (username, callback) => {
        setUser({ username });
        callback();
    }

    const logout = () => {
        setUser(null);
        navigate("/");
    }

    const auth = { user, login, logout };

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function ProtectRoute(props){
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) return <Navigate to="/login" state={{ from: location }} replace />;
    return props.children;
}