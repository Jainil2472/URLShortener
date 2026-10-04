import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const changeStatus = (status) => {
        setIsAuthenticated(status);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                changeStatus
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;