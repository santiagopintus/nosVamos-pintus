import { useState, useEffect } from 'react';
import ItemList from '../../containers/itemList/itemList';
import products from '../../../data/products';
import customFetch from '../../../utils/customFetch';
import { useParams } from 'react-router';

const ItemListContainer = (props) => { 
    
    const [items, setItems] = useState([]);

    const { idCategory } = useParams()

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.category === idCategory
        }))
            .then(result => setItems(result))
            .catch(err => console.log(err))
    }, [items]);

    const onAdd = (quantity) => {
        console.log(`${quantity} items agregados al carrito`);
    };

    return (
        <>
            <ItemList items={items} onAdd={ onAdd } />
        </>
    )
};

export default ItemListContainer;