import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);

    const addToCart = (newItem, qty) => {
        if (cartList.find(item => item.id === newItem.id)) {
            setCartList(cartList.map(item => item.id === newItem.id ? {
                 ...item, qty: item.qty + qty } : item))
        } else {

            setCartList([...cartList, {
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                imgSrc: newItem.imgSrc,
                stock: newItem.stock,
                qty: qty,
            }]);
        }
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clear,
            removeItem,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;