import ItemCount from '../itemCount/itemCount';
import './item.css';

const Item = ({item, onAdd}) => {
    const imgPath = 'images/products/'
    const imgExt = '.webp'
    const imgSrc = `${imgPath}${item.imgSrc[0]}${imgExt}`;

    return (
        <>
            {/* Comienza el item */}
            <div className="item">
                {/* La imagen del item */}
                <div className="item__image-container">
                    <img src={imgSrc} alt={item.title}/>
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