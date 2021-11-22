import './cartWidget.css'

const CartWidget = (props) => {

    return (
        <>
            <button type="button" className="carrito btn d-flex">
                {
                    //Carga diferentes imágenes dependiendo del contenido del carrito
                    props.carritoCount > 0 ?
                    <>
                        <img src="https://i.ibb.co/P5vVXQh/cart-Widget-full.png" alt="El icono de un carrito de compras lleno" />
                        <span className="badge bg-secondary">{props.carritoCount}</span>
                    </>
                    :
                    //No se muestra el badge cuando no hay items    
                    <img src="https://i.ibb.co/Q8r1V7Z/cart-Widget-empty.png" alt="El icono de un carrito de compras vacío" />
                }
            </button>
        </>
    )
}

export default CartWidget;