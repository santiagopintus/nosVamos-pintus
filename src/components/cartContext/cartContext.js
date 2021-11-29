import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);

    const addToCart = (product) => {
        setCartList([...cartList, product]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;