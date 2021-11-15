import Item from '../../item/item';
import './itemList.css';

const ItemList = ({ items, onAdd }) => {

    return (
        <>
            <div className="items-container">
                {items.map((item) => {
                    return (
                        <Item key={item.id} item={item} onAdd={ onAdd }/>
                    )
                })} 
            </div>
        </>
    );
}

export default ItemList;