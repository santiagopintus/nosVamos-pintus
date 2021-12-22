import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import './checkout.css';
import { CartContext } from '../contexts/cartContext';
import { useContext, useState} from 'react';
import { UserContext } from '../contexts/userContext';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';
import db from "../../utils/firebaseConfig";

/* Este componente muestra los datos finales de la compra y guarda la orden en la DB */
const Checkout = () => {
    const cartContext = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [orderId, setOrderId] = useState(null);

    const finishOrder = () => {
        // Se crea una orden y se guarda en la DB
        const order = createOrder();
        storeNewOrder(order)
            .then(order => setOrderId(order.id))
            // Actualizamos el stock en la DB
            .then(updateStock());
        //Vaciamos el carrito
        cartContext.clear();
    }

    const createOrder = () => {
        // Crea una nueva orden en forma de objeto
        let newOrder = {
            buyer: user,
            items: cartContext.cartList.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price
                }
            }),
            date: new Date(),
            total: cartContext.getTotal()
        };
        
        return newOrder;
    }

    const storeNewOrder = async (order) => {
        // Obtenemos la referencia de la colección de ordenes
        const newOrderRef = doc(collection(db, "orders"));
        // Guardamos la orden en la colección
        await setDoc(newOrderRef, order)

        return newOrderRef;
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    const updateStock = () => {
        let newStock;
        cartContext.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id);
            if ((item.stock - item.qty) < 0) {
                newStock = 0;
            } else {
                newStock = item.stock - item.qty;
            }
            await updateDoc(itemRef, {
                stock: newStock
            })
        });
    }
    return (
        <>
            <div className="checkout-container checkout-final-step">
            <h1>Finalizar Compra</h1>
            
            {cartContext.getItemsQty() > 0 ?
                <div className="checkout">
                    <div className="datos-flex">
                        <div className="datos-usuario">
                            <h2>Datos de usuario</h2>
                            <h3>Nombre: {user.name}</h3>
                            <h3>Teléfono: {user.phone}</h3>
                            <h3>Email: {user.email}</h3>
                        </div>

                        <div className="datos-compra">
                            <h2>Datos de compra</h2>
                            <h3>Estás llevando: {cartContext.getItemsQty()} {cartContext.getItemsQty() > 1 ? "items" : "item"}</h3>
                        </div>
                    </div>

                    <h2 className="checkout-total">Total a pagar: ${cartContext.getTotal()}</h2>
                    <button className="btn btn-primary" onClick={finishOrder}>Pagar</button>
                </div>
                    :
                        //Si no hay items en el carrito, y todavía no se generó una orden de compra, muestra un mensaje
                        !orderId ?
                        <>
                            <Modal title="No hay productos en el carrito" content="Por favor agregue productos al carrito"
                                button={<Link className="no-text-dec" to="/"><button className="btn btn-primary" data-bs-dismiss="modal">Agregar Productos</button></Link>}
                            />
                            <div className="center-content">
                                <h3>No hay productos para comprar</h3>
                                <Link className="btn btn-primary" to="/">Agregar productos :D</Link>
                            </div>
                        </>
                        :
                        //Si ya se generó una orden de compra, muestra otro mensaje
                        <>
                            <Modal title="Compra realizada" content={`Gracias por tu compra! Tu número de compra es: ${orderId}`}
                                button={
                                    <button
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={() => copyText(orderId)}
                                    >Copiar</button>}
                            />
                            <div className="center-content">
                                <h3>Muchas gracias por tu compra{user.name && `, ${user.name}`}!</h3>
                                <Link className="btn btn-primary" to="/">Volver al inicio</Link>
                            </div>
                        </>     
                
                }
            </div>
        </>
    );
}

export default Checkout;