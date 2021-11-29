import { useContext } from 'react';
import constants from '../../utils/constants';
import { CartContext } from '../cartContext/cartContext';
import './cart.css';

const Cart = () => {

    const cartContext = useContext(CartContext);

    console.log(cartContext.cartList);

    return (
        <div className="cart">
            <h1>Bienvenido al carrito! <img src={constants.iconsImgUrl + "cartWidget_empty.png"} alt="Icono de un carrito"></img></h1>
        </div>
    );
}

export default Cart;