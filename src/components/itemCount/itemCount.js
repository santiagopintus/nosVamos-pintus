import { useState } from 'react';
import './itemCount.css';
import constants from '../../utils/constants';
const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(initial);

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
        onAdd(quantity);
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
                    <img src={constants.iconsImgUrl + "delete_icon.svg"} alt="Icono de resetear la cantidad del item seleccionado"></img>
                </button>
                <button className="add-icon" title="Agregar al carrito"
                    onClick={() => onAddToCart(count)}
                    disabled={count === 0 || stock === 0}
                >
                    <img src={constants.iconsImgUrl + "addToCart.svg"} alt="Icono de agregar al carrito"></img>
                </button>
                
                {
                    stock <= 0 &&
                    <p className="stock-error">Sin stock</p>
                }

            </div>
        </>
    )
}

export default ItemCount;