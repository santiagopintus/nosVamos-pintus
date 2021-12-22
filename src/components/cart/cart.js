import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
import { CartContext } from '../contexts/cartContext';
import SplideCarousel from '../splideCarousel/splideCarousel';
import './cart.css';

const Cart = () => {

    const cartContext = useContext(CartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cartContext.getTotal());
    }, [cartContext]);

    return (
        <div className="cart">
            <h1>Bienvenido al carrito! <img src={constants.iconsImgUrl + "cartWidget_empty.png"} alt="Icono de un carrito"></img></h1>

            <div className="cart-list">
                {
                    cartContext.cartList.length > 0 ?
                        <>
                            <div className="cart-opciones">
                                <button onClick={cartContext.clear} className="btn btn-secondary">Vaciar carrito</button>
                                <Link className="btn btn-primary" to="/">
                                    Agregar Productos
                                </Link>
                            </div>

                            <div className="cart-list-items">
                                
                                {cartContext.cartList.map((item, index) => {
                                    return (
                                        <div className="cart-item" key={index}>
                                            <div className="cart-item-content">
                                                <div className="cart-item-img">
                                                    <SplideCarousel images={item.imgSrc} imgAlt={item.title} itemId={item.id}></SplideCarousel>
                                                </div>
                                                <div className="cart-item-info">
                                                    <p className="cart-item-name">Producto: {item.title}</p>
                                                    <p className="cart-item-price">${item.price}</p>
                                                    <p className="cart-item-quantity">Cantidad: {item.qty}</p>
                                                    <p className="cart-item-total">Total: ${item.price * item.qty}</p>
                                                </div>
                                            </div>
                                            
                                            <button onClick={() => cartContext.removeItem(item.id)} className="btn">
                                                <img src={constants.iconsImgUrl + "delete_icon.svg"} alt="Icono de borrar un producto del carrito"></img>
                                            </button>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </>
                        :
                        <div className="cart-empty">
                            <p>Tu carrito está vacío</p>
                            <Link className="btn btn-primary" to="/">Agregar productos</Link>
                        </div>
                }
            </div>
            
            {
                total > 0 &&
                    
                <div className="cart-total">
                    <p>Total del carrito: ${total}</p>
                    <Link className="btn btn-primary checkout-btn" to="/checkout">Comprar carrito</Link>
                </div>
            }

        </div>
    );
}

export default Cart;