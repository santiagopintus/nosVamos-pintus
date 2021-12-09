import './itemDetail.css';
import SplideCarousel from '../splideCarousel/splideCarousel';
import ItemCount from '../itemCount/itemCount';
import Modal from '../modal/modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const ItemDetail = ({ item }) => {
    const cartContext = useContext(CartContext);

    const images = item.imgSrc
    
    const [itemAdded, setItemAdded] = useState(false);
    
    const onAdd = (qty) => {
        setItemAdded(true);
        cartContext.addToCart(item, qty);
    }

    const itemInCart = () => {
        return cartContext.isInCart(item.id);
    }

    return (
        <>
            <div className="item-detail">

                {!item.title ?
                    <p className="cargando-msg">Cargando item...</p>
                    :
                    <>
                        <div className="item-detail__carousel">
                            <SplideCarousel images={images} imgAlt={item.title} isItemDetail={true}/>
                        </div>
                        <div className="item-detail__info">
                            <h2 className="item-detail__title">{item.title}</h2>
                            <p className="item-detail__description">{item.description}</p>
                            <p className="item-detail__stock">Stock: {item.stock}</p>
                            <p className="item-detail__price">${item.price}</p>
                            
                            {!itemAdded ?
                                <>
                                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                                {
                                    itemInCart() &&
                                    <p className="item-detail__added">Este producto ya está en el carrito</p>
                                }
                                </>
                                :
                                <>
                                    {/* <p className="item-detail__added">Item agregado al carrito</p> */}
                                    <Link to="/cart">
                                        <button className="btn btn-secondary">Terminar mi compra</button>
                                    </Link>
                                    <Modal title="Agregado!" content="Producto agregado al carrito"
                                        button={
                                            <Link to="/cart">
                                                <button data-bs-dismiss="modal" className="btn btn-secondary">Ir al carrito</button>
                                            </Link>
                                        }
                                    />
                                </>
                            }
                        </div>
                    </>
                }
            </div>
        </>
    );  
};

export default ItemDetail;