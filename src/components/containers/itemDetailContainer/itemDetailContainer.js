import './itemDetailContainer.css';
import customFetch from '../../../utils/customFetch';
import products from '../../../data/products';
import { useState, useEffect } from 'react';
import ItemDetail from '../../itemDetail/itemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    /* Obteniendo los items usando promise */
    useEffect(() => {
        customFetch(2000, products[1])
            .then(result => {
                console.log(result)
            })
            .then(result => setItem(result))
            .then(console.log(`Item seteado: ${item}`))
            .catch(err => console.log(`Error accediendo a los productos: ${err}`))
    }, [item]);

    return (
        <div>Testeando...
            <div className="item-detail">
                {/* <ItemDetail item={ item }/> */}
                {products[0].title}
            </div>    
        </div>
    )
    
}

export default ItemDetailContainer;