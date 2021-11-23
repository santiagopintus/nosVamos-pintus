import './itemDetailContainer.css';
import customFetch from '../../../utils/customFetch';
import products from '../../../data/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../../itemDetail/itemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { idItem } = useParams();

    /* Obteniendo el item usando promise */
    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setItem(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (    
        <ItemDetail item={item}/>
    )
    
}

export default ItemDetailContainer;