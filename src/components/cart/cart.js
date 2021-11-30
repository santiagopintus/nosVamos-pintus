import { useContext } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
import { CartContext } from '../cartContext/cartContext';
import SplideCarousel from '../splideCarousel/splideCarousel';
import './cart.css';

const Cart = () => {

    const cartContext = useContext(CartContext);

    return (
        <div className="cart">
            <h1>Bienvenido al carrito! <img src={constants.iconsImgUrl + "cartWidget_empty.png"} alt="Icono de un carrito"></img></h1>

            <div className="cart-list">
                {
                    cartContext.cartList.length > 0 ?
                        <>
                            <div className="cart-opciones">
                                <button onClick={cartContext.clear} className="btn btn-secondary">Vaciar carrito</button>
                                <Link to="/">
                                    <button className="btn btn-secondary">Agregar productos</button>
                                </Link>
                            </div>

                            <div className="cart-list-items">
                                
                                {cartContext.cartList.map((item, index) => {
                                    return (
                                        <div className="cart-item" key={index}>
                                            <div className="cart-item-img">
                                                <SplideCarousel images={item.imgSrc} imgAlt={item.title} itemId={item.id}></SplideCarousel>
                                            </div>
                                            <div className="cart-item-info">
                                                <p className="cart-item-name">Producto: {item.title}</p>
                                                <p className="cart-item-price">${item.price}</p>
                                                <p className="cart-item-quantity">Cantidad: {item.qty}</p>
                                                <p className="cart-item-total">Total: ${item.price * item.qty}</p>
                                                <button onClick={() => cartContext.removeItem(item.id)} className="btn btn-secondary">
                                                    <img src={constants.iconsImgUrl + "delete_icon.svg"} alt="Icono de borrar un producto del carrito"></img>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </>
                        :
                        <div className="cart-empty">
                            <p>Tu carrito está vacío</p>
                            <Link to="/"><button className="btn btn-secondary">Agregar productos</button></Link>
                        </div>
                }
            </div>
        </div>
    );
}

export default Cart;