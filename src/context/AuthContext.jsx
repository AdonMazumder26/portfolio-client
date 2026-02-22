import { createContext, useState, useEffect } from "react";
import API from "../services/api";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const res = await API.get("/auth/me");
                setUser(res.data);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                localStorage.removeItem("token");
            }
        };

        checkUser();
    }, []);

    const login = async (email, password) => {
        const res = await API.post("/auth/login", { email, password });
        localStorage.setItem("token", res.data.token);

        const userRes = await API.get("/auth/me");
        setUser(userRes.data);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};