import './item.css';
import SplideCarousel from '../splideCarousel/splideCarousel';
import { Link } from 'react-router-dom';

const Item = ({id, title, src, price}) => {

    return (
        <>
            {/* Comienza el item */}
            <div className="item">
                {/* La imagen del item */}
                <div className="item__image-container">
                    <SplideCarousel images={src} imgAlt={title} itemId={id}/>
                </div>

                {/* La información del item */}
                <div className="item__info">
                    <h2 className="item__title">{title}</h2>
                    <p className="item__price">${price}</p>
                    <div className="item__options">
                        <Link to={`/item/${id}`}><button className="item__details-btn btn btn-primary">Detalles</button></Link>
                    </div>
                </div>

            </div>    
        </>
    )
};

export default Item;