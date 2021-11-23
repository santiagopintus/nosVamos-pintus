// import Carousel from '../carousel/carousel';
import ItemCount from '../itemCount/itemCount';
import './item.css';
// import SwiperCarousel from '../swiperCarousel/swiperCarousel';
import SplideCarousel from '../splideCarousel/splideCarousel';
import { Link } from 'react-router-dom';
// import "swiper/css/bundle";

const Item = ({id, title, src, price, stock, onAdd}) => {

    return (
        <>
            {/* Comienza el item */}
            <div className="item">
                {/* La imagen del item */}
                <Link to={`/item/${id}`}>
                    <div className="item__image-container">
                        <SplideCarousel images={src} imgAlt={title} />
                    </div>
                </Link>

                {/* La información del item */}
                <div className="item__info">
                    <h2 className="item__title">{title}</h2>
                    <p className="item__price">${price}</p>
                    <div className="item__options">
                        <Link to={`/item/${id}`}><button className="item__details-btn btn btn-primary">Detalles</button></Link>
                        <ItemCount stock={stock} initial={0} onAdd={ onAdd }/>
                    </div>
                </div>

            </div>    
        </>
    )
};

export default Item;