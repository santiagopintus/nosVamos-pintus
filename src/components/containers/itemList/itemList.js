import Item from '../../item/item';
import './itemList.css';

const ItemList = ({ items }) => {

    return (
        <>
            <div className="items-container">
                {
                items.length > 0 ?
                
                items.map((item) => {
                    return (
                        <Item id={item.id} key={item.id} src={item.imgSrc} price={item.price} stock={item.stock} title={item.title}/>
                    )
                })
                :
                <p>Cargando los productos...</p>
                } 
            </div>
        </>
    );
}

export default ItemList;