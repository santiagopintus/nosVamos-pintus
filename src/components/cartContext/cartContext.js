import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);
    // const [cartItemsQty, setCartItemsQty] = useState(0);

    const addToCart = (newItem, qty) => {
        /* Agrega productos al carrito. Si el producto ya existe en el carrito,
        se suma la cantidad. Si no existe, se agrega al carrito */
        
        if (isInCart(newItem.id)) {
            isInCart(newItem.id).qty += qty;
            setCartList([...cartList]);
        } else {
            // Si el item no está en el carrito, se agrega
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
        /* Elimina un producto del carrito según el ID */
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const clear = () => {
        /* Limpia el carrito */
        setCartList([]);
    }

    const isInCart = (id) => {
        /* Retorna true si el producto está en el carrito */
        return cartList.find(item => item.id === id);
    }

    const getItemsQty = () => {
        if (cartList.length > 0) {
            let qtys = cartList.map(item => item.qty);
            let total = qtys.reduce((total, qty) => total + qty);
        return total;
        } else {
            return 0;
        }
    }

    const getTotal = () => {
        if (cartList.length > 0) {
            let prices = cartList.map(item => item.price * item.qty);
            let total = prices.reduce((total, price) => total + price);
            return total;
        } else {
            return 0;
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clear,
            removeItem,
            isInCart,
            getItemsQty,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;