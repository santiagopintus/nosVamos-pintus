import Carousel from '../carousel/carousel';
import ItemCount from '../itemCount/itemCount';
import './item.css';

const Item = ({item, onAdd}) => {
    const images = item.imgSrc

    return (
        <>
            {/* Comienza el item */}
            <div className="item">
                {/* La imagen del item */}
                <div className="item__image-container">
                    <Carousel controls={'carouselControl'+item.id} images={images} imgAlt={item.title}/>
                </div>

                {/* La información del item */}
                <div className="item__info">
                    <h2 className="item__title">{item.title}</h2>
                    <p className="item__price">${item.price}</p>
                    <div className="item__options">
                        <button className="item__details-btn btn btn-primary">Detalles</button>
                        <ItemCount stock={item.stock} initial={item.stock} onAdd={ onAdd }/>
                    </div>
                </div>

            </div>    
        </>
    )
};

export default Item;