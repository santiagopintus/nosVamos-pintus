import { useState, useEffect } from 'react';
import './itemListContainer.css';
import ItemList from '../../containers/itemList/itemList';
import products from '../../../data/products';
import customFetch from '../../../utils/customFetch';

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([]);

    /* Obteniendo los items usando promise */
    useEffect(() => {
        customFetch(2000, products)
            .then(result => setItems(result))
            .catch(err => console.log(err))
    }, [items]);


    const onAdd = (quantity) => {
        console.log(`${quantity} items agregados al carrito`);
    };

    return (
        <>
            <h1 className="saludo">{props.greeting}</h1>
            <ItemList items={items} onAdd={ onAdd } />
        </>
    )
};

export default ItemListContainer;