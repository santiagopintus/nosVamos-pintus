import './itemListContainer.css';
import ItemCount from '../itemCount/itemCount';

const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        console.log(quantity);
    };

    return (
        <>
            <h1 className="saludo">{props.greeting}</h1>

            <ItemCount stock={10} initial={0} onAdd={ onAdd }/>
        </>
    )
};

export default ItemListContainer;