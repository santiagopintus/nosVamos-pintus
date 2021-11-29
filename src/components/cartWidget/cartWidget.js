import './cartWidget.css'
import constants from '../../utils/constants'

const CartWidget = (props) => {
    
    return (
        <>
            <button type="button" className="carrito btn d-flex">
                {
                    //Carga diferentes imágenes dependiendo del contenido del carrito
                    props.carritoCount > 0 ?
                    <>
                        <img src={constants.iconsImgUrl + "cartWidget_full.svg"} alt="El icono de un carrito de compras lleno" />
                        <span className="badge bg-secondary badge-carrito">{props.carritoCount}</span>
                    </>
                    :
                    //No se muestra el badge cuando no hay items    
                    <img src={constants.iconsImgUrl + "cartWidget_empty.svg"} alt="El icono de un carrito de compras vacío" />
                }
            </button>
        </>
    )
}

export default CartWidget;