import { useState } from 'react';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    let [count, setCount] = useState(initial);
    let [addedToCart, setAddedToCart] = useState({
        added: false,
        quantity: 0,
    });

    const increment = () => {
        if (stock > count && stock > 0) {
            setCount(count + 1)
        }
    };
        
    const decrement = () => {
        if (count > 1 && stock > 0) {
            setCount(count - 1)
        }
    };
    const reset = () => setCount(0);

    const onAddToCart = (quantity) => {
        setAddedToCart({added: true, quantity: quantity});
        onAdd(quantity);
        reset();

        setTimeout(() => {
            setAddedToCart({added: false, quantity: 0});
        }, 3000);
    };

    return (
        <>
            <div className="item-counter-container">
                
                <div className="item-counter btn-group">
                    <button className="btn btn-secondary" onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button className="btn btn-secondary" onClick={increment}>+</button>
                </div>
                <button className="delete-icon" onClick={reset} title="Resetear item">
                    <img src="https://i.ibb.co/HdWm5wT/delete-icon.png" alt="Icono de resetear la cantidad del item seleccionado"></img>
                </button>
                <button className="add-icon" title="Agregar al carrito"
                    onClick={() => onAddToCart(count)}
                    disabled={count === 0 || stock === 0}
                >
                    <img src="https://i.ibb.co/Jz1z0pN/add-To-Cart.png" alt="Icono de agregar al carrito"></img>
                </button>
                
                {
                    stock <= 0 &&
                    <p className="stock-error">Sin stock</p>
                }

                {
                    addedToCart.added &&
                    
                    <div className="added-alert">
                        <p className="added-to-cart">
                            {addedToCart.quantity} {addedToCart.quantity > 1 ? 'items agregados' : 'item agregado'} al carrito
                        </p>
                    </div>
                }

            </div>
        </>
    )
}

export default ItemCount;