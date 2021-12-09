import { createContext, useState } from "react";

export const UserContext = createContext();

/* Este context se encarga de guardar la información del usuario para concretar la compra */
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (user) => {
        //El usuario se logea cuando completa el formulario de compra
        setUser(user);
        setIsLoggedIn(true);
    };
    
    const logout = () => {
        //El usuario se deslogea cuando se completa la compra
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{
            user,
            isLoggedIn,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;