import './itemDetail.css';
import SplideCarousel from '../splideCarousel/splideCarousel';
import ItemCount from '../itemCount/itemCount';
import { useState } from 'react';

const ItemDetail = ({ item }) => {
    const images = item.imgSrc

    const { itemAdded, setItemAdded } = useState(false);

    const onAdd = () => {
        setItemAdded(true);
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
                            {
                                !itemAdded &&
                                <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                            }
                        </div>
                    </>
                }
            </div>
        </>
    );  
};

export default ItemDetail;