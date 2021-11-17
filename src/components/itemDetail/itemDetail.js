import './itemDetail.css';
import SplideCarousel from '../splideCarousel/splideCarousel';

const ItemDetail = ({ item }) => {
    const images = item.imgSrc

    return (
        <>
            <div className="item-detail">
                <div className="item-detail__img">
                    <SplideCarousel images={images} imgAlt={item.title}/>
                </div>
                <div className="item-detail__info">
                    <h2 className="item-detail__title">{item.title}</h2>
                    <p className="item-detail__description">{item.description}</p>
                    <p className="item-detail__price">${item.price}</p>
                </div>
            </div>
        </>
    );  
};

export default ItemDetail;