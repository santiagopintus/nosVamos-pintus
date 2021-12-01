import './cartWidget.css'
import constants from '../../utils/constants'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../cartContext/cartContext';

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    // Declaro un estado que contiene la cantidad total de productos en el carrito
    let [ cartTotalQty, setCartTotalQty ] = useState(0);
    
    useEffect(() => {
        //Cuando se agrega o quita un producto se llama esta función
        setCartTotalQty(cartContext.getItemsQty());
    }, [cartContext]);

    return (
        <>
            <button type="button" className="carrito btn d-flex">
                {
                    //Carga diferentes imágenes dependiendo del contenido del carrito
                    cartTotalQty > 0 &&
                    <>
                        <img src={constants.iconsImgUrl + "cartWidget_full.svg"} alt="El icono de un carrito de compras lleno" />
                        <span className="badge bg-secondary badge-carrito">{cartTotalQty}</span>
                    </>
                    //No se muestra el badge cuando no hay items    
                    /* <img src={constants.iconsImgUrl + "cartWidget_empty.svg"} alt="El icono de un carrito de compras vacío" /> */
                }
            </button>
        </>
    )
}

export default CartWidget;