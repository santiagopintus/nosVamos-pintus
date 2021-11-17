import './itemDetailContainer.css';
import customFetch from '../../../utils/customFetch';
import products from '../../../data/products';
import { useState, useEffect } from 'react';
import ItemDetail from '../../itemDetail/itemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    /* Obteniendo el item usando promise */
    useEffect(() => {
        customFetch(2000, products)
            .then(productsArray => {
                setItem(productsArray[7])
            })
            .catch(err => console.log(`Error accediendo a los productos: ${err}`))
    }, [item]);

    return (    
        <ItemDetail item={item}/>
    )
    
}

export default ItemDetailContainer;