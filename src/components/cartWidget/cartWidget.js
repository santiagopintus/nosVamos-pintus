import './cartWidget.css'

const CartWidget = (props) => {

    return (
        <>
            <button type="button" className="carrito btn d-flex">
                {
                    //Carga diferentes imágenes dependiendo del contenido del carrito
                    props.carritoCount > 0 ?
                    <>
                        <img src="images/icons/cartWidget_full.svg" alt="El icono de un carrito de compras lleno" />
                        <span className="badge bg-secondary">{props.carritoCount}</span>
                    </>
                    :
                    //No se muestra el badge cuando no hay items    
                    <img src="images/icons/cartWidget_empty.svg" alt="El icono de un carrito de compras vacío" />
                }
            </button>
        </>
    )
}

export default CartWidget;