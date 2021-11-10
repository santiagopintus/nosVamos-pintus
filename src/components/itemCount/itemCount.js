import { useState } from 'react';
import './itemCount.css';

const ItemCount = (props) => {

    let [count, setCount] = useState(props.initial);
    let [addedToCart, setAddedToCart] = useState({
        added: false,
        quantity: 0,
    });

    const increment = () => {
        if (props.stock > count && props.stock > 0) {
            setCount(count + 1)
        }
    };
        
    const decrement = () => {
        if (count > 1 && props.stock > 0) {
            setCount(count - 1)
        }
    };
    const reset = () => setCount(0);

    const onAdd = (quantity) => {
        setAddedToCart({added: true, quantity: quantity});
        props.onAdd(quantity);
        reset();  
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
                    <img src="images/icons/delete_icon.svg" alt="Icono de resetear la cantidad del item seleccionado"></img>
                </button>
                <button className="add-icon" title="Agregar al carrito"
                    onClick={() => onAdd(count)}
                    disabled={count === 0 || props.stock === 0}
                >
                    <img src="images/icons/addToCart.svg" alt="Icono de agregar al carrito"></img>
                </button>
                
                {
                    props.stock <= 0 &&
                    <p className="stock-error">Sin stock</p>
                }

                {
                    addedToCart.added &&

                    <p className="added-to-cart">{ addedToCart.quantity } items agregados al carrito</p>
                }

            </div>
        </>
    )
}

export default ItemCount;