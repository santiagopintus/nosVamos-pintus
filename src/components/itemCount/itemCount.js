import { useState } from 'react';
import './itemCount.css';

const ItemCount = (props) => {

    let [count, setCount] = useState(props.initial);

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
                <button className="add-icon" title="Agregar al carrito">
                    <img src="images/icons/addToCart.svg" alt="Icono de agregar al carrito"></img>
                </button>
                
                {
                    props.stock <= 0 &&
                    <p className="stock-error">Sin stock</p>
                }

            </div>
        </>
    )
}

export default ItemCount;