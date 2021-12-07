import './itemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../../itemDetail/itemDetail';
import firestoreFetchOne from '../../../utils/firestoreFetchOne';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { idItem } = useParams();

    /* Obteniendo el item usando promise */
    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(item => setItem(item))
            .catch(err => console.log(err));
    }, [idItem]);

    return (
        <ItemDetail item={item}/>
    )
    
}

export default ItemDetailContainer;