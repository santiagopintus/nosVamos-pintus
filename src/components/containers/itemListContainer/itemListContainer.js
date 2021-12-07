import { useState, useEffect } from 'react';
import ItemList from '../../containers/itemList/itemList';
import { useParams } from 'react-router';
import firestoreFetch from '../../../utils/firestoreFetch';

const ItemListContainer = () => { 
    
    const [items, setItems] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => {setItems(result)})
            .catch(err => console.log(err))
    }, [idCategory]);

    return (
        <>
            <ItemList items={items}/>
        </>
    )
};

export default ItemListContainer;