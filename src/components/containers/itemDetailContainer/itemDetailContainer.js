import './itemDetailContainer.css';
import customFetch from '../../../utils/customFetch';
import products from '../../../data/products';
import { useState, useEffect } from 'react';
// import ItemDetail from '../../itemDetail/itemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    /* Obteniendo los items usando promise */
    useEffect(() => {
        customFetch(2000, products[0])
            .then(result => {
                console.log(result)
            })
            .then(result => setItem(result))
            .then(console.log(`Item seteado: ${item}`))
            .catch(err => console.log(`Error accediendo a los productos: ${err}`))
    }, [item]);

    return (
        // <ItemDetail item={ item }/>
        <p>Testeando...</p>
    )
    
}

export default ItemDetailContainer;